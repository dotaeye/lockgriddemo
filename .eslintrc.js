{
  "env": {
      "browser": true,
      "node": true,
      "commonjs": true,
      "es6": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended", "plugin:jsx-a11y/recommended"],
  "parserOptions": {
      "ecmaFeatures": {
          "jsx": true
      },
      "ecmaVersion": 2018,
      "sourceType": "module"
  },
  "settings": {
      "react": {
          "version": "16.4.2"
      }
  },
  "plugins": ["react", "jsx-a11y"],
  "parser": "babel-eslint",
  "rules": {
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "react/prop-types": 0,
      "strict": 0,
      //"no-unused-vars": 0,
      "indent": ["error", 4],
      "linebreak-style": [0, "error", "windows"],
      "quotes": ["error", "single"],
      "semi": ["error", "never"],
      "no-console": "off",
      "no-extra-boolean-cast": "off",
      "no-useless-escape": "off"
  },

  "globals": {}
}
