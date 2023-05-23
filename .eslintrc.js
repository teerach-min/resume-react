module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": ["@typescript-eslint", "react-hooks"],
    "rules": {
        "semi": ["error", "never"],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": "off",
        "react/no-unescaped-entities": ["error", {"forbid": [">", "}"]}],
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    }
}
