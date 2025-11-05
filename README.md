# Plugin-FFmpeg

The ffmpeg executable files plugin

https://raw.githubusercontent.com/Verteilen/Plugin-FFmpeg/refs/heads/main/dist/manifest.json

## Import

In the github repo page, click the json file to preview, Click upper-right corner raw button to see the raw json data

Then copy the url link
<img src="./docs/Raw.png" alt="PageImage" />

You will get [https://raw.githubusercontent.com/Verteilen/FFmpeg-Plugin/refs/heads/main/dist/manifest.json](https://raw.githubusercontent.com/Verteilen/FFmpeg-Plugin/refs/heads/main/dist/manifest.json)

Then let's open up the application, go the plugin page to import

<img src="./docs/PluginPage.png" alt="PageImage" style="height: 50vh" />

Click plugin import button on the upper-right corner

<img src="./docs/PluginButton.png" alt="PageImage" style="width: 50vh" />

Enter the json link to url field and click confirm\
And if you're reference the private repo you will need token\
More detail in [Here](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens)

<img src="./docs/Page.png" alt="PageImage" style="width: 50vh" />

Wait a bit, And you can see it in the list now

![PageImage](./docs/PluginList.png)

> [!NOTE]
> The config you just download will store in the application folder\
> path: {root}/data/plugin

## Install

Now we can tell the node to download the executable file, base on the config we just import

Let's go to node manage page 

<img src="./docs/NodePage.png" alt="PageImage" style="height: 50vh" />

Check the node you want to manage, and click plugin manage

<img src="./docs/NodeInstall.png" alt="PageImage" style="width: 50vh" />

Now you can manage the plugin this way, there are three actions for this page
* Install
* Update
* Uninstall

<img src="./docs/NodeInstallButton.png" alt="PageImage" style="width: 50vh" />
