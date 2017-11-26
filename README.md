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

NODE FLAVORS; `node` FOR TRADITIONAL COMMONJS, AND `node-esm` FOR ES MODULES:

```json
{
  "extends": "will-robinson/node"
}
```

```json
{
  "extends": "will-robinson/node-esm"
}
```
