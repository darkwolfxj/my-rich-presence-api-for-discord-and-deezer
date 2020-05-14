## Welcome
***This is my custom api, which I will integrates a user's Deezer listening history dynamically into Discord, so that people can see what the user has recently listened to and how long they've been listening.***

Here is a step by step breakdown of what this api does:
- A user with a Deezer account, a Discord account, and a Facebook account authorizes the Discord api to connect to their Discord account and update their status.
- 

# Follow these easy steps to start using it, now! (But only if you're on a *Windows* machine)

## If you don't have a Discord account, or the Desktop Discord Client:
1. Sign up [here](https://discord.com/register)!
2. Download and install the Desktop Discord Client with [this](https://discord.com/api/download?platform=win)

## If you don't have a Deezer account or Deezer for Desktop:
1. Sign up for Deezer [here](https://www.deezer.com/us/register) and make sure to *sign up with Facebook*
2. Download and install *Deezer for Desktop* [here](https://www.microsoft.com/en-us/p/deezer-music/9nblggh6j7vv?rtc=1&activetab=pivot:overviewtab)

## If you don't have Chrome:
1. Download and install *Google Chrome* [here](https://www.google.com/chrome/)

## If you don't have Node or Python:
1. [Downlod and install node](https://nodejs.org/dist/v14.2.0/node-v14.2.0-x64.msi)
2. [Download and install Python](https://www.python.org/ftp/python/3.8.2/python-3.8.2-amd64.exe)

## If you have all of the required accounts and applications:
1. [Download and extract the zip of this repo](https://github.com/darkwolfxj/my-rich-presence-api-for-discord-and-deezer/archive/master.zip), *make sure the files are extracted into your downloads folder. You can move them later, but only after you complete step 2.
2. Execute the follow keyboard shortcuts and commands:
    - ``Windows Key + R``
    - Type ``cmd``
    - Press ``Enter``
    - Type the following command:
        - ``cd Downloads/my-rich-presence-api-for-discord-and-deezer-master``
        - Press ``Enter``
    - Type the following command exactly as it is written, only substituting your Facebook email and password:
        - ``echo email="your Facebook login email" >> secrets.py``
        - Press ``Enter``
        - ``echo password="your Facebook password" >> secrets.py`` <br>
        ***My api will not save your information entered here.***
        - Press ``Enter``
    - Type ``exit`` and press ``Enter``
3. Navigate to the ``my-rich-presence-api-for-discord-and-deezer-master`` folder
4. Double-click ``Start-Deezer-Rich-Presence.bat`` (If you have extensions hidden, it will just say ``Start-Deezer-Rich-Presence``)
