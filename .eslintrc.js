module.exports = {
  parser: "babel-eslint",
  plugins: [
    "babel",
    "immutable",
    "import",
    "mocha",
    "node"
  ],
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  rules: {
    "accessor-pairs": "error",
    "array-bracket-spacing": "error",
    "arrow-parens": "error",
    "arrow-spacing": "error",
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "callback-return": "error",
    "camelcase": "error",
    "comma-dangle": "error",
    "comma-spacing": "error",
    "comma-style": "error",
    "complexity": "error",
    "computed-property-spacing": "error",
    "consistent-return": "error",
    "consistent-this": "error",
    "constructor-super": "error",
    "curly": "error",
    "default-case": "error",
    "dot-location": ["error", "property"],
    "dot-notation": "error",
    "eol-last": "error",
    "eqeqeq": "error",
    "func-names": "error",
    "func-style": ["error", "expression", {"allowArrowFunctions": true}],
    "generator-star-spacing": "error",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": "error",
    "id-length": "error",
    "id-match": "error",
    "indent": ["error", 2, {"SwitchCase": 1}],
    "init-declarations": "error",
    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "lines-around-comment": "error",
    "max-depth": "error",
    "max-nested-callbacks": "error",
    "max-params": "error",
    "max-statements": "error",
    "new-cap": "error",
    "new-parens": "error",
    "newline-after-var": "error",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-bitwise": "warn",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "error",
    "no-class-assign": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": "warn",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-else-return": "error",
    "no-empty-character-class": "error",
    "no-empty-pattern": "error",
    "no-empty": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-implicit-coercion": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "error",
    "no-inner-declarations": "error",
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": "error",
    "no-mixed-requires": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-multi-str": "error",
    "no-multiple-empty-lines": "error",
    "no-native-reassign": "error",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "error",
    "no-nested-ternary": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-wrappers": "error",
    "no-new": "error",
    "no-obj-calls": "error",
    "no-octal-escape": "error",
    "no-octal": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": "error",
    // I don't do this anyhow
    // "no-process-exit": "error",
    "no-proto": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-modules": "error",
    "no-restricted-syntax": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow-restricted-names": "error",
    "no-shadow": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-sync": "error",
    // Not sure this is a good rule
    // "no-ternary": "error",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-undef": "error",
    "no-undefined": "error",
    "no-underscore-dangle": "error",
    "no-unexpected-multiline": "error",
    "no-unneeded-ternary": "error",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
    "no-unused-vars": "error",
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-concat": "error",
    "no-var": "error",
    "no-void": "error",
    "no-warning-comments": "error",
    "no-with": "error",
    "object-curly-spacing": "error",
    "object-shorthand": "error",
    "one-var": ["error", "never"],
    "operator-assignment": "error",
    "operator-linebreak": "error",
    "padded-blocks": ["error", "never"],
    // This really isn't an appropriate rule
    // "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-reflect": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    "quote-props": ["error", "consistent-as-needed", {"keywords": true}],
    "quotes": "error",
    "radix": "error",
    "require-yield": "error",
    "semi-spacing": "error",
    "semi": ["error", "never"],
    "sort-vars": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": "error",
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "space-unary-ops": "error",
    "spaced-comment": "error",
    "strict": ["error", "never"],
    "use-isnan": "error",
    "valid-jsdoc": "error",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": "error",
    "wrap-regex": "error",
    "yoda": "error",
    "array-callback-return": "error",
    // Gives me false positives
    // "arrow-body-style": "error",
    "id-blacklist": "error",
    // I don't care about line length
    // "max-len": "error",
    "max-statements-per-line": "error",
    "newline-before-return": "error",
    "newline-per-chained-call": "error",
    // This is a silly rule, it's not duplicated
    // "no-duplicate-imports": "error",
    "no-empty-function": "error",
    "no-extra-label": "error",
    "no-implicit-globals": "error",
    "no-new-symbol": "error",
    // What a stupid rule
    // "no-process-env": "error",
    "no-restricted-globals": "error",
    "no-restricted-imports": "error",
    "no-self-assign": "error",
    "no-unmodified-loop-condition": "error",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-useless-computed-key": "error",
    "no-useless-constructor": "error",
    "no-useless-escape": "error",
    "no-whitespace-before-property": "error",
    "one-var-declaration-per-line": "error",
    "prefer-rest-params": "error",
    // What is this even?
    // "require-jsdoc": "error",
    // Apparently not smart enough?
    // "sort-imports": "error",
    "template-curly-spacing": "error",
    "yield-star-spacing": "error",

    "babel/array-bracket-spacing": "error",
    "babel/arrow-parens": "error",
    "babel/flow-object-type": "error",
    "babel/generator-star-spacing": "error",
    "babel/new-cap": "error",
    "babel/no-await-in-loop": "error",
    "babel/object-curly-spacing": "error",
    "babel/object-shorthand": "error",
    "immutable/no-let": "error",
    "immutable/no-mutation": "error",
    "immutable/no-this": "error",
    // Doesn't actually work yet
    // "import/default": "error",
    "import/export": "error",
    "import/extensions": "error",
    "import/imports-first": "error",
    "import/named": "error",
    "import/namespace": "error",
    "import/no-amd": "error",
    "import/no-commonjs": "error",
    "import/no-deprecated": "error",
    // This is a silly rule, it's not duplicated
    // "import/no-duplicates": "error",
    // Doesn't understand organization libraries
    // "import/no-extraneous-dependencies": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-named-as-default-member": "error",
    "import/no-named-as-default": "error",
    "import/no-namespace": "error",
    // Only for frontend
    // "import/no-nodejs-modules": "error",
    // Only for backend
    "import/no-unresolved": "error",
    "import/order": "error",
    "mocha/handle-done-callback": "error",
    "mocha/no-exclusive-tests": "error",
    "mocha/no-global-tests": "error",
    "mocha/no-pending-tests": "error",
    "mocha/no-skipped-tests": "error",
    // Just not very good
    // "mocha/no-synchronous-tests": "error",
    // Only for backend
    "node/no-missing-import": "error",
    "node/no-missing-require": "error",
    // False possitives when running over tests.
    // "node/no-unpublished-import": "error",
    "node/no-unpublished-require": "error",
    // v6 isn't supported yet?
    // "node/no-unsupported-features": ["error", {"version": 6}],
    "node/shebang": "error"
  }
}
