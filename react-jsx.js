'use strict'

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'react/react-in-jsx-scope': ['warn'],
    'react/jsx-no-duplicate-props': ['warn'],
    'react/jsx-no-undef': ['warn', {'allowGlobals': true}],
    'react/jsx-uses-react': ['warn'],
    'react/jsx-uses-vars': ['warn'],
    'react-hooks/rules-of-hooks': ['warn'],
    'react-hooks/exhaustive-deps': ['warn']
  }
}
