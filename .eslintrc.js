module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint"
    },
    extends: ["plugin:prettier/recommended", "prettier", "prettier/vue"],
    plugins: ["prettier"],
    // add your custom rules here
    rules: {
        "no-console": 0,
        "no-lone-blocks": 0
    }
};
