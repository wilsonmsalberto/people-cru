# People List App

## Software

This app is brought to you by all of these lovely software projects:

### Frameworks & Bundlers

- [Babel](https://babeljs.io/)
- [NextJS](https://github.com/zeit/next.js)
- [React](https://facebook.github.io/react/)
- [Webpack](https://webpack.github.io/)

### Styling

- [Emotion](https://emotion.sh)

### Testing & Code Quality

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Jest](https://jestjs.io/)
- [Testing Library](https://testing-library.com/)

### Others

- [Typescript](https://www.typescriptlang.org/)
- [Yarn](https://yarnpkg.com)

## Requirements

The usage of this app requires the following software to be installed in your machine.

Each software has its own dependencies, please follow the installation instructions as best as you
can.

### Recommended software versions

Tested and working on Mac OSX 10.15.3 (Catalina):

| Software                        | Version  |
| ------------------------------- | -------- |
| [Yarn.js](https://yarnpkg.com/) | 1.17.3 + |

**You can install yarn from npm with `npm install -g yarn` but make sure to follow the website's
instructions**

## Setup project

Clone the project to your folder of choice

```bash
git clone git@github.com:wilsonmsalberto/people-cru.git
```

Run the following lines in your terminal **while inside the project folder** in order to get/install
all the package dependencies:

```bash
yarn
```

## Run project in development

**Start the client**

```bash
yarn dev
```

This will run your project in development mode and it will be running in
[http://localhost:3000](http://localhost:3000)

Any changes you make will automatically build and refresh the page thus reflecting your changes.

## Run tests for the application

```bash
yarn test
```

This will run the tests that are currently written for your application

If you wish to change/develop the tests and have them update dynamically you should run

```bash
yarn test:watch
```

## Test a production build locally

```bash
yarn prod
```

Similarly to `yarn dev` this will prepare a production ready build and run it in
[http://localhost:3000](http://localhost:3000)

This command may also be used for deployment purposes, in a service such as Zeit or Netlify

### Developer Log

- Data Source - [Mockaroo](https://www.mockaroo.com/)
