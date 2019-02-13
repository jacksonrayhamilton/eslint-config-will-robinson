'use strict'

module.exports = {
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/react-in-jsx-scope': ['warn'],
    'react/jsx-no-duplicate-props': ['warn'],
    'react/jsx-no-undef': ['warn'],
    'react/jsx-uses-react': ['warn'],
    'react/jsx-uses-vars': ['warn']
  }
}
