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
create-react-app simple-sketch --scripts-version=react-scripts-ts
cd simple-sketch
npm install
npm start
```

Here is the output:

```
192:chemtranslator informatics$ create-react-app simple-sketch --scripts-version=react-scripts-ts

Creating a new React app in /Users/informatics/chemtranslator/simple-sketch.

Installing packages. This might take a couple of minutes.
Installing react, react-dom, and react-scripts-ts...


> fsevents@1.2.4 install /Users/informatics/chemtranslator/simple-sketch/node_modules/fsevents
> node install

[fsevents] Success: "/Users/informatics/chemtranslator/simple-sketch/node_modules/fsevents/lib/binding/Release/node-v57-darwin-x64/fse.node" already installed
Pass --update-binary to reinstall or --build-from-source to recompile

> uglifyjs-webpack-plugin@0.4.6 postinstall /Users/informatics/chemtranslator/simple-sketch/node_modules/webpack/node_modules/uglifyjs-webpack-plugin
> node lib/post_install.js

+ react-dom@16.6.3
+ react@16.6.3
+ react-scripts-ts@3.1.0
added 1468 packages from 745 contributors and audited 17855 packages in 169.304s
found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details
Installing @types/node, @types/react, @types/react-dom, @types/jest, typescript as dev dependencies npm...

npm WARN ajv-keywords@3.2.0 requires a peer of ajv@^6.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN fork-ts-checker-webpack-plugin@0.2.10 requires a peer of typescript@^2.1.0 but none is installed. You must install peer dependencies yourself.
npm WARN ts-jest@22.0.1 requires a peer of jest@^22.0.1 || ^22.1.0-alpha.1 || ^23.0.0-alpha.1 but none is installed. You must install peer dependencies yourself.
npm WARN ts-jest@22.0.1 requires a peer of typescript@2.x but none is installed. You must install peer dependencies yourself.

+ typescript@3.1.6
+ @types/react-dom@16.0.9
+ @types/react@16.7.6
+ @types/jest@23.3.9
+ @types/node@10.12.9
added 7 packages from 70 contributors and audited 17866 packages in 17.721s
found 1 high severity vulnerability
  run `npm audit fix` to fix them, or `npm audit` for details

Success! Created simple-sketch at /Users/informatics/chemtranslator/simple-sketch
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd simple-sketch
  npm start

Happy hacking!
```

#### 2. Start the App

Switch to the directory `./simple-sketch/`, and run `npm start`, we will get following output, and the link will be opened in the web browser:

```
$ cd simple-sketch
$ npm start

> simple-sketch@0.1.0 start /Users/informatics/chemtranslator/simple-sketch
> react-scripts-ts start

Starting the development server...

ts-loader: Using typescript@3.1.6 and /Users/informatics/chemtranslator/simple-sketch/tsconfig.json

Compiled successfully!

You can now view simple-sketch in the browser.

  Local:            http://localhost:3000/
  On Your Network:  http://192.168.1.6:3000/

Note that the development build is not optimized.
To create a production build, use npm run build.
```

#### 3. Test

Run `npm test`, we will get following output:

```
$ npm test

> simple-sketch@0.1.0 test /Users/informatics/chemtranslator/simple-sketch
> react-scripts-ts test --env=jsdom

 PASS  src/App.test.tsx
  ✓ renders without crashing (19ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.334s
Ran all test suites related to changed files.
```

#### 4. Build for Production

We can run `npm run build`to build the app for production, we will get following output:

```
$ npm run build

> simple-sketch@0.1.0 build /Users/informatics/chemtranslator/simple-sketch
> react-scripts-ts build

Creating an optimized production build...
Starting type checking and linting service...
Using 1 worker with 2048MB memory limit
ts-loader: Using typescript@3.1.6 and /Users/informatics/chemtranslator/simple-sketch/tsconfig.prod.json
Compiled successfully.

File sizes after gzip:

  38.91 KB  build/static/js/main.e393ef14.js
  300 B     build/static/css/main.29266132.css

The project was built assuming it is hosted at the server root.
You can control this with the homepage field in your package.json.
For example, add this to build it for GitHub Pages:

  "homepage" : "http://myname.github.io/myapp",

The build folder is ready to be deployed.
You may serve it with a static server:

  npm install -g serve
  serve -s build

Find out more about deployment here:

  http://bit.ly/2vY88Kr
```

### Add Dependencies

We need to use these packages `proptypes`, `socket.io-client`, and `uuid`, so add them to the dependencies:

```
  "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3",
    "react-scripts-ts": "3.1.0",
    "proptypes": "^0.14.4",
    "socket.io-client": "^2.1.1",
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
