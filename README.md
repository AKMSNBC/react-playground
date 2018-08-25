# React Playground

## Table of contents

- [Overview](#overview)
- [Setup](#setup)

## Overview
[React.js](https://reactjs.org/) + [Create React App](https://github.com/facebook/create-react-app) + [React Router](https://github.com/ReactTraining/react-router) + [Create React App Buildpack](https://github.com/mars/create-react-app-buildpack)

## Setup
(for first timers)

#### 1. Install System Dependencies

The following commands should be executed in terminal (MacOSX/Linux).
Currently support Node version: 10.x.x (LTS starts Oct 2018)
Currently support NPM version: 6.x.x

- Use [NVM](https://github.com/creationix/nvm) to install Node v10.x.x

```sh
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.0/install.sh | bash
nvm install 10
nvm use 10
```

- Use [avn](https://github.com/wbyoung/avn) Automatic Version Switching for Node.js

```sh
npm install -g avn avn-nvm avn-n
avn setup
```

#### 2. Clone Repo into local directory

You will need to clone the React Playground repository so you can develop locally on your machine. You can use the command below or use your preferred Git GUI like [SourceTree](http://www.sourcetreeapp.com/), [GitHub for Mac](https://mac.github.com/), or [Tower](http://www.git-tower.com/).

```sh
git clone (link) react-playground; cd $_
```

#### 3. Install project dependencies

The following two commands will install the third party frameworks and packages that Overwatch is built on.

```sh
npm install
```

#### 4. Setup Environment Variables

this copies the `.env.example` to a config you can edit as needed

```sh
cp .env.example .env
```

#### 5. Start the app

```sh
npm start
```

#### 6. VSCode Debbugging

Follow VSCode instructions for debugging React application.

[VSCode instructions](https://code.visualstudio.com/docs/nodejs/reactjs-tutorial#_debugging-react)

#### 7. Deploy to Heroku

The buildpack deploys a React UI as a static web site.

```sh
create-react-app $APP_NAME
cd $APP_NAME
git init
heroku create $APP_NAME --buildpack https://github.com/mars/create-react-app-buildpack.git
git add .
git commit -m "Start with create-react-app"
git push heroku master
heroku open
```
