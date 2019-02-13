# ESLint Config, Will Robinson!

<img alt="Robot spazzing out" src="robot.gif" />

Mr. Will Robinson, THIS CONFIGURATION HAS BEEN FORMULATED FOR THE EXCLUSIVE
PURPOSE OF AVERTING LOGICAL ERRORS IN YOUR CODE, TO THE GREATEST EXTENT
POSSIBLE.

THIS CONFIGURATION WILL NOT COMPLAIN ABOUT YOUR ARBITRARY STYLISTIC DECISIONS.
YOU MAY PUT WHATEVER WHITESPACE YOU WANT, WHEREVER YOU WANT.  YOU MAY OMIT
BRACES AROUND `if`, AND EVEN OMIT SEMICOLONS, TOO… IF YOU WISH.  THE
CONFIGURATION WILL SEE THE MISSION THROUGH.

STAY VIGILANT, Mr. Will Robinson!  ADOPT THIS SUPERIOR ESLint CONFIGURATION,
IMMEDIATELY!

## Usage

Install globally (e.g. for editors):

```
yarn global add eslint-config-will-robinson
npm i -g eslint-config-will-robinson
```

Install in a project:

```
yarn add -D eslint eslint-config-will-robinson
npm i -D eslint eslint-config-will-robinson
```

Create an `.eslintrc` file in your project and extend the configuration:

```json
{
  "extends": "will-robinson"
}
```

Lint your project using [the relevant plugin for your
editor](https://eslint.org/docs/user-guide/integrations), or with [the ESLint
CLI](https://eslint.org/docs/user-guide/command-line-interface).

## Environments

`"extends": "will-robinson"` assumes nothing about the environment in which the
code will run.  This may be useful for writing “isomorphic” code (code that runs
in both Node.js and web browsers).

For the ubiquitous cases in which interaction with the host environment is
necessary (e.g. for use of Node’s `process` or the DOM’s `document` globals),
this configuration offers alternate flavors for common environments.  These
flavors can be used instead by way of the following alternate `.eslintrc` file
contents:

- Environment-agnostic, but with ES modules: `{"extends": "will-robinson/esm"}`
- Node.js with traditional CommonJS: `{"extends": "will-robinson/node"}`
- Node.js with ES modules: `{"extends": "will-robinson/node-esm"}`
- Browsers with traditional scripts: `{"extends": "will-robinson/browser"}`
- Browsers with ES modules: `{"extends": "will-robinson/browser-esm"}`

## Syntax Extensions

Support for parsing JSX syntax, and checks for common blunders when writing JSX
with Facebook’s “React” library, are also available.

Since JSX and React can be used in both browser and server environments (and,
therefore, also isomorphic contexts), the JSX configuration provided by this
plugin is designed to be applied in addition to its other configurations.

For instance, to enable JSX+React checks when writing code for a browser
(perhaps the most common case), you could do:

```json
{
  "extends": [
    "will-robinson/browser-esm",
    "will-robinson/react-jsx"
  ]
}
```

Or, if writing JSX+React that executes on servers in addition to browsers, you
could use the following setup, which supports isomorphism:

```json
{
  "extends": [
    "will-robinson",
    "will-robinson/react-jsx"
  ]
}
```
