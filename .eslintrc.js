module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking"
  ],
  parserOptions: {
    project: "./tsconfig.json"
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    // 这里填入你的项目用到的环境
    // 它们预定义了不同环境的全局变量，比如：
    //
    browser: true
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  rules: {
    // 这里填入你的项目需要的个性化配置
    "@typescript-eslint/no-inferrable-types": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/indent": ["error", 2],
    //  "@typescript-eslint/array-type": ["error", {default: "array"}],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/no-this-alias": "off",
    "no-const-assign": "error",
    "@typescript-eslint/typedef": [
      "error",
      {
        "arrayDestructuring": true,
        "arrowParameter": false,
        "propertyDeclaration": true,
        "variableDeclaration": true
      }
    ]
  }
}

// module.exports = {
//     extends: [
//         'alloy',
//         'alloy/typescript',
//     ],
//     env: {
//         // 这里填入你的项目用到的环境
//         // 它们预定义了不同环境的全局变量，比如：
//         //
//         browser: true
//         // node: true,
//         // mocha: true,
//         // jest: true,
//         // jquery: true
//     },
//     globals: {
//         // 这里填入你的项目需要的全局变量
//         // false 表示这个全局变量不允许被重新赋值，比如：
//         //
//         // myGlobal: false
//     },
//     rules: {
//         // 这里填入你的项目需要的个性化配置
//         "@typescript-eslint/explicit-member-accessibility": "off",
//         "@typescript-eslint/no-inferrable-types": "off",
//         "@typescript-eslint/no-unused-vars": "off"
//     }
// };
