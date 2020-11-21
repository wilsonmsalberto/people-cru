# People List App

[Website](https://people-cru.vercel.app/)

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
- [StyleLint](https://stylelint.io/)
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
| [Yarn.js](https://yarnpkg.com/) | 1.22.10 + |

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

#### Resources

- Data Source - [Mockaroo](https://www.mockaroo.com/)

#### Developments

- Use of React Context to separate data concerns
- Use of theming with Styled Components (Emotionjs) to easily switch themes if needed
- Creation of small components that are reusable
- Creation of block components that aggregate some logic and data handling
- Some accessiblity and semantic concerns were applied
- Use of ESLint, StyleLint and EditorConfig to have a consistent set of code standards

#### Improvements

- People form should validate each field upon submission for specific formats and content types
- Dark mode should be more visually balanced
- Page transitions could help smooth the understanding of success/failure
- Success/failure errors or warnings should be informed to the user
- Could have used a simple REST Api to get data and handle loadings
- Updated users should be focused after a successful edit
