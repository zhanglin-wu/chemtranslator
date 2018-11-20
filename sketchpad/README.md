# Learning Project - React App

This is a small project for learning React, etc.

## Prerequisites

We must install NodeJS and NPM, and make sure they are accessible from a command line. We can get npm from [Get npm](https://www.npmjs.com/get-npm).

## IDE

I use [Visual Studio Code](https://code.visualstudio.com/docs#vscode) as the IDE.

## Build And Run

Here are the commands to build and run the app:

```
git clone https://github.com/zhanglin-wu/chemtranslator
cd chemtranslator/simple-sketch
npm install
npm start
```

Usually, the npm will open this link in the web browser automatically, if it doesn't, we can open it manually:

[http://localhost:3000](http://localhost:3000)

## Steps and Problems

### Create, Build, Test, and Run

We can find all these commands in the offical documentation [Create React App - Getting Started](https://facebook.github.io/create-react-app/docs/getting-started).

#### 1. Create React App (Problem 1)

Here are the steps for creating a react app:

```
npx create-react-app simple-sketch --typescript
cd simple-sketch
npm install
npm start
```

There seem to be a problem with the command `create-react-app` in my computer, but it doesn't block running the app though. Not sure what the real problem is, but need more investigation.

```
PS C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator> npx create-react-app simple-sketch --typescript
Command failed: C:\"Program Files"\nodejs\node.exe C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js config get cache --parseable
module.js:473
      throw err;
      ^

Error: Cannot find module 'C:\Program'
    at Function.Module._resolveFilename (module.js:527:15)
    at Function.Module._load (module.js:453:25)
    at Function.Module.runMain (module.js:665:10)
    at startup (bootstrap_node.js:187:16)
    at bootstrap_node.js:607:3


Creating a new React app in C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts...
```

#### 2. Start the App

Run `npm start`, we will get following output, and the link will be opened in the web browser:

```
PS C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch> npm start

> simple-sketch@0.1.0 start C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch
> react-scripts start
Starting the development server...
Compiled successfully!

You can now view simple-sketch in the browser.

  http://localhost:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

#### 3. Test

Run `npm test`, we will get following output:

```
PS C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch> npm test

> simple-sketch@0.1.0 test C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch
> react-scripts test
 PASS  src/App.test.js
  √ renders without crashing (21ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        2.146s
Ran all test suites related to changed files.
```

#### 4. Build for Production

We can run `npm run build`to build the app for production, we will get following output:

```
PS C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch> npm run build

> simple-sketch@0.1.0 build C:\PKI\ChemDraw-2X\Learning\Repos\chemtranslator\simple-sketch
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  34.45 KB  build\static\js\1.2dd891c4.chunk.js
  763 B     build\static\js\runtime~main.229c360f.js
  711 B     build\static\js\main.4dab746d.chunk.js
  512 B     build\static\css\main.80108936.chunk.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/CRA-deploy
```

### Add Dependencies

We need to use these packages `proptypes`, `socket.io-client`, and `uuid`, so add them to the dependencies:

```
  "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3",
    "react-scripts": "2.1.1",
    "proptypes": "^0.14.4",
    "socket.io-client": "^1.4.5",
    "uuid": "^2.0.0"
  }
```


## Materials

Here are some commands for build, run, and test:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

We can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
