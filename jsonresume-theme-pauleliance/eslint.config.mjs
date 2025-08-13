"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const js_1 = require("@eslint/js");
const globals_1 = require("globals");
const typescript_eslint_1 = require("typescript-eslint");
const config_1 = require("eslint/config");
exports.default = (0, config_1.defineConfig)([
    {
        files: ["**/*.{ts,mts,cts}"],
        plugins: { js: js_1.default },
        extends: ["js/recommended"],
        languageOptions: { globals: globals_1.default.browser }
    },
    typescript_eslint_1.default.configs.recommended,
]);
