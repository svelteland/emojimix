import os
import requests
from bs4 import BeautifulSoup
from tqdm import tqdm
import json
import asyncio
import aiohttp

page = requests.get("https://9to5google.com/2021/09/24/gboard-emoji-kitchen-list/")
soup = BeautifulSoup(page.content, "html.parser")

imgs = soup.find_all("img")
img_urls = [img["src"] for img in imgs]
emoji_img_urls = [link for link in img_urls if link.find("production-standard-emoji-assets") != -1]

emojis = [link.split("/")[-1][:-4] for link in emoji_img_urls]
emojis = [emoji for emoji in emojis if len(emoji) == 5]

emoji_pair_url = {}
pattern20 = "https://www.gstatic.com/android/keyboard/emojikitchen/20201001/u{x}/u{x}_u{y}.png"
pattern21 = "https://www.gstatic.com/android/keyboard/emojikitchen/20210521/u{x}/u{x}_u{y}.png"

async def fetch(session, url):
    async with session.head(url) as rep:
        return rep

async def none():
    return None

async def fetchOneEmoji(emoji_a):
    urls = []
    for emoji_b in emojis:
        urls.append(pattern20.format(x=emoji_a, y=emoji_b))

    tasks = []
    async with aiohttp.ClientSession() as session:
        for i in range(len(emojis)):
            if emojis[i] in emoji_pair_url and emoji_a in emoji_pair_url[emojis[i]]:
                tasks.append(none())
                continue
            url = urls[i]
            tasks.append(fetch(session, url))
        reps = await asyncio.gather(*tasks)
        return reps

for emoji_a in tqdm(emojis):
    try:
        emoji_pair_url[emoji_a] = {}
        # tmpfile is used for 
        tmpfile = f"{emoji_a}.tmp"
        if os.path.exists(tmpfile):
            with open(tmpfile, "r") as f:
                emoji_pair_url[emoji_a] = json.loads(f.read())
            continue

        loop = asyncio.get_event_loop()
        reps = loop.run_until_complete(fetchOneEmoji(emoji_a))

        for i in range(len(emojis)):
            if reps[i] is not None and reps[i].status == 200:
                emoji_b = emojis[i]
                emoji_pair_url[emoji_a][emoji_b] = pattern20.format(x=emoji_a, y=emoji_b)
        print(emoji_a, len(emoji_pair_url[emoji_a]) / len(emojis))
        print(emoji_a, len([rep for rep in reps if rep is not None]))
        with open(tmpfile, "w") as f:
            f.write(json.dumps(emoji_pair_url[emoji_a]))
    except:
        print(f"{emoji_a} failed")
        pass

for emoji in emojis:
    if emoji not in emoji_pair_url:
        print(emoji, 'not saved...')
        exit()

for emoji_a in emojis:
    for emoji_b in emoji_pair_url[emoji_a]:
        url = emoji_pair_url[emoji_a][emoji_b]
        if emoji_a not in emoji_pair_url[emoji_b]:
            emoji_pair_url[emoji_b][emoji_a] = url
        else:
            assert url == emoji_pair_url[emoji_b][emoji_a]

removed_emojis = []
for emoji in emoji_pair_url:
    if len(emoji_pair_url[emoji]) == 0:
        removed_emojis.append(emoji)

for emoji in removed_emojis:
    print(emoji_pair_url[emoji])
    del emoji_pair_url[emoji]

for emoji in emoji_pair_url:
    print(len(emoji_pair_url[emoji]) / len(emoji_pair_url))

with open("emoji", "w") as f:
    for emoji in emoji_pair_url:
        # Skipped "2639-fe0f" as I don't know how to find images for them.
        if len(emoji) == 5:
            f.write(emoji + "\n")

with open("emoji_urls.json", "w") as f:
    f.write(json.dumps(emoji_pair_url))
