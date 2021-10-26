module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "eslint-config-lighthouselabs"],
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "indent": [
            "error",
            "spaces"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
};
