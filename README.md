# ESLint Config, Will Robinson!

<img alt="Robot spazzing out" src="robot.gif" />

THIS CONFIGURATION HAS BEEN FORMULATED FOR THE EXPRESS PURPOSE OF AVERTING
ERRORS IN YOUR CODE.

IT WILL NOT COMPLAIN ABOUT YOUR ARBITRARY STYLISTIC DECISIONS, UNLESS THEY POSE
A THREAT TO “THE MISSION.”

STAY VIGILANT Will Robinson.

## Usage!

INSTALL: `npm i -D eslint eslint-config-will-robinson`

EXTEND IN `.eslintrc`:

```json
{
  "extends": "will-robinson"
}
```

IT IS ADVISABLE THAT MR. Will Robinson ASSUME NOTHING ABOUT HIS ENVIRONMENT.
THEREFORE, `{"extends": "will-robinson"}` IS ENVIRONMENT-AGNOSTIC.

FOR ENVIRONMENT-AGNOSTIC ES MODULES, HE SHOULD USE `{"extends": "will-robinson/esm"}`.

## Environments!

NEVER THE LESS, ENVIRONMENTS BEAR SIGNIFICANCE.  MR. Will Robinson SHOULD
IDENTIFY HIS:

- Node.js with traditional CommonJS: `{"extends": "will-robinson/node"}`
- Node.js with ES modules: `{"extends": "will-robinson/node-esm"}`
- Browsers with scripts: `{"extends": "will-robinson/browser"}`
- Browsers with ES modules: `{"extends": "will-robinson/browser-esm"}`
