'use strict'

module.exports = {
  rules: {
    // Possible Errors
    'for-direction': ['warn'],
    'no-compare-neg-zero': ['warn'],
    'no-cond-assign': ['warn', 'always'],
    'no-console': ['warn'],
    'no-constant-condition': ['warn'],
    'no-debugger': ['warn'],
    'no-dupe-args': ['warn'],
    'no-dupe-keys': ['warn'],
    'no-duplicate-case': ['warn'],
    'no-empty': ['warn'],
    'no-empty-character-class': ['warn'],
    'no-inner-declarations': ['warn'],
    'no-invalid-regexp': ['warn'],
    'no-irregular-whitespace': ['warn'],
    'no-obj-calls': ['warn'],
    'no-prototype-builtins': ['warn'],
    'no-regex-spaces': ['warn'],
    'no-sparse-arrays': ['warn'],
    'no-unexpected-multiline': ['warn'],
    'no-unreachable': ['warn'],
    'no-unsafe-finally': ['warn'],
    'no-unsafe-negation': ['warn'],
    'use-isnan': ['warn'],
    'valid-typeof': ['warn'],

    // Best Practices
    'accessor-pairs': ['warn'],
    'array-callback-return': ['warn'],
    'curly': ['warn', 'multi-line'],
    'eqeqeq': ['warn'],
    'no-alert': ['warn'],
    'no-caller': ['warn'],
    'no-div-regex': ['warn'],
    'no-empty-function': ['warn'],
    'no-empty-pattern': ['warn'],
    'no-eval': ['warn'],
    'no-extend-native': ['warn'],
    'no-global-assign': ['warn'],
    'no-implicit-globals': ['warn'],
    'no-implied-eval': ['warn'],
    'no-iterator': ['warn'],
    'no-loop-func': ['warn'],
    'no-multi-str': ['warn'],
    'no-new': ['warn'],
    'no-new-func': ['warn'],
    'no-new-wrappers': ['warn'],
    'no-octal': ['warn'],
    'no-octal-escape': ['warn'],
    'no-proto': ['warn'],
    'no-redeclare': ['warn', {'builtinGlobals': true}],
    'no-return-assign': ['warn', 'always'],
    'no-script-url': ['warn'],
    'no-self-assign': ['warn'],
    'no-self-compare': ['warn'],
    'no-sequences': ['warn'],
    'no-unmodified-loop-condition': ['warn'],
    'no-unused-expressions': ['warn'],
    'no-unused-labels': ['warn'],
    'no-with': ['warn'],
    'radix': ['warn'],
    'require-await': ['warn'],

    // Strict Mode
    'strict': ['warn', 'safe'],

    // Variables
    'no-delete-var': ['warn'],
    'no-shadow': ['warn', {'builtinGlobals': true}],
    'no-shadow-restricted-names': ['warn'],
    'no-undef': ['warn'],
    'no-unused-vars': ['warn'],
    'no-use-before-define': ['warn', {'functions': false}],

    // ECMAScript 6
    'no-const-assign': ['warn'],
    'no-dupe-class-members': ['warn'],
    'require-yield': ['warn']
  }
}
