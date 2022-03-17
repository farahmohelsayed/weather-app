# Weather-App
An app that uses weather API and user search input to match the user query and output the current weather temperature and status for the City specified

## **Installation**

- Above the list of files, click Code.
- To clone the repository using HTTPS, copy the HTTPS link
- In your command-line tool, clone repo using git clone URL

## **Dependencies**
```
$ npm start
$ npm install
```
## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── components # component folder
    │      ├── UI # A component folder that includes all UI functionalities
    │          ├── Button.js # Button Component
    │          ├── Button.module.css # Button Component CSS module
    │          ├── Input.js  # Input Component
    │          ├── Input.module.css  # Input Component CSS module
    │          ├── SearchBox.js  # Search box Component
    │          └── SearchBox.module.css # Search box CSS module
    │      ├── weather # A component folder that includes all weather functionalities
    │          ├── WeatherLocation.js.js # A component that includes the query weather location and current date
    │          ├── WeatherLocation.module.css # A WeatherLocation CSS module
    │          ├── WeatherTemp.js  # A component for the current temperature in Celsius as well as the current weather state (ex: clear, rain, snow, mist, ..)
    │          ├── WeatherTemp.module.css  # WeatherTemp Component CSS module
    │          ├── SearchBox.js  # Search box Component
    │          └── SearchBox.module.css # Search box CSS module
    ├── Assets # Helpful images 
    │   ├── snow.jpg
    │   ├── rain.jpg
    │   ├── cloud.jpg
    │   ├── mist.jpg
    │   └── sky.jpg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```
