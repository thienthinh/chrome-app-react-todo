# Chrome App React Todo Boilerplate

> Boilerplate for Chrome App with React and Redux project

## Features

 - Todo App built by [React](https://github.com/facebook/react)/[Redux](https://github.com/rackt/redux) for Chrome App
 - Development use hot reloading React/Redux (Using [Webpack](https://github.com/webpack/webpack)
 - Using [Dexie.js](http://dexie.org) for persistent storage offline indexedDB

## App example

 - Todo list from [Redux](http://redux.js.org/docs/basics/ExampleTodoList.html)

## Installation

```bash
# clone the repo
$ git clone https://github.com/thienthinh/electron-react-chat-app.git

# Install dependencies
$ npm install
```

## Development

```bash
# Build to folder 'dev'
$ npm run dev
```
* After build project to folder 'dev', [Load unpacked app](https://developer.chrome.com/extensions/getstarted#unpacked) from folder 'dev' to chrome extensions.
* When run Chrome App from development (folder dev), it automatically hot reload for each file change.

## Build
```bash
# Build to folder 'build'
$ npm run build
```

## Todos
 - Implement feature delete todo by click on delete button.
 - Double click to edit a todo.
 - Implement feature toggle all todos as completed.
 - Add feature to display count of todos left.
 - Add button to delete all completed todos.
 - Fix bug cannot scroll body when todos list exceed window screen.

## License

MIT © [Thinh Le](http://thinhle.com)

