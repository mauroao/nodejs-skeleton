# Node.js Skeleton

## What is this project

A simple template skeleton to setup new Node.js projects. <br />
Here I show how to setup Node.js environment, Visual Studio Code setup and plugins, how to debug, lint and format javascript code.

## Prerequisites

* Download and install [Node.js](https://nodejs.org/en/) (version 12 or above)
* Download and install [Visual Studio Code](https://code.visualstudio.com)
* Install the following Visual Studio Code extensions:
  - VS Code ESLint extension
  - EditorConfig for VS Code

## Install

- Download or clone this repository;
- Open command prompt, navigate to `nodejs-skeleton` folder;
- Type command:
  ```
  npm install
  ```

## Run application

- Open command prompt, navigate to `nodejs-skeleton` folder;
- Type command:
  ```
  npm start
  ```

## Run ESLint (check js syntax)

- Open command prompt, navigate to `nodejs-skeleton` folder;
- Type command:
  ```
  npm run lint
  ```
- To automatically fix problems, type command:
  ```
  npm run lint:fix
  ```

## Running unit tests

- Open command prompt, navigate to `nodejs-skeleton` folder;
- Type command:
  ```
  npm test
  ```

## Debug application - Launch method

Description: <br />
Use Visual Studio Code to launch and debug application.

1. Open Visual Studio Code;
2. Click menu: `File - Open`;
3. Open `nodejs-skeleton` folder;
4. Open `src/main.js` file, put a breackpoint at first line;
5. Show the debug pannel ( click "bug" icon on left side bar);
6. Choose "Launch Programm" option at the drop down box;
7. Click debug button (green "play" icon);

### Debug application - Attach method

Description: <br />
Launch application from terminal and use Visual Studio Code to attach process.

1. Follow steps from 1 to 5 from "*Debug application - Launch method*" chapter;
2. Open a **new** window Terminal (**not** the integrated Visual Studio terminal!);
3. Navigate to `nodejs-skeleton` folder;
4. Run command:
```
npm run debug
```
5. Switch back to Visual Studio Code;
6. Choose "Attach" option at the drop down box;
7. Click debug button (green "play" icon);

### Debug test - Attach method

Description: <br />
Launch tests from terminal and use Visual Studio Code to attach process.

1. Follow steps from 1 to 5 from "*Debug application - Launch method*" chapter, but at item 4, choose `test/test.js` file instead;
2. Open a **new** window Terminal (**not** the integrated Visual Studio terminal!);
3. Navigate to `nodejs-skeleton` folder;
4. Run command:
```
npm run test:debug
```
5. Switch back to Visual Studio Code;
6. Choose "Attach" option at the drop down box;
7. Click debug button (green "play" icon);
