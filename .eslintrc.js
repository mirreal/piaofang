module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "amd": true,
        "es6": true,
    },
    "globals": {
        "describe": true,
        "expect": true,
        "it": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module",
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true,
            "experimentalObjectRestSpread": true,
        },
    },
    "plugins": [
        "react"
    ],
    "root": true,
    "rules": {
        // 使用 4 个空格缩进
        "indent": [2, 4],
        // 使用驼峰命名或者 UPPERCASE_WITH_UNDERSCORES
        "camelcase": [2, {"properties": "never"}],
        // 使用单引号
        "quotes": [2, "single", {"allowTemplateLiterals": true}],
        // 使用分号
        "semi": [2, "never"],
        // 使用 === 和 !==
        "eqeqeq": [2, "always"],
        // 单行可省略{}，其他情况不允许省略
        "curly": [2, "multi-line"],

        // 禁用不必要的布尔转换
        "no-extra-boolean-cast": 2,

        // disable rules from base configurations
        // "no-console": 0,

        // code style
        // 数组中起始位置是否需要空格
        "array-bracket-spacing": [2, "never"],
        // 设置{}风格
        "brace-style": [2, "1tbs", { "allowSingleLine": true }],
        // 不允许在数组或对象最后一项使用逗号
        "comma-dangle": [2, "never"],
        // 在分号前不适用空格，分号后使用空格
        "comma-spacing": 2,
        // 分号风格，默认放在行尾
        "comma-style": 2,
        // 在变量属性中禁用空格
        "computed-property-spacing": 2,
        // 设置对 this 的引用
        "consistent-this": [2, "ctx"],
        // 文件以新行结尾
        "eol-last": 2,
        // 在函数标识和 () 之间禁用空格
        "func-call-spacing": 2,
        // JSX 使用双引号
        "jsx-quotes": [2, "prefer-double"],
        // 在 key 和 value 之间的空格一个空格
        "key-spacing": 2,
        // 在关键字前后使用空格
        "keyword-spacing": 2,
        // 行注释位置
        // "line-comment-position": 2,
        // 最深嵌套 4 层
        "max-depth": [2, { "max": 4 }],
        // 最大行长
        "max-len": [2, {
            "code": 120,
            "ignoreUrls": true,
            "ignoreComments": true,
            "ignoreStrings": true,
            "ignoreTemplateLiterals": true,
            "ignoreRegExpLiterals": true
        }],
        // 文件最大行数
        "max-lines": [2, 600],
        // 函数最多参数
        "max-params": [2, { "max": 8 }],
        // 每行最大语句条数为 2
        "max-statements-per-line": [2, { "max": 2 }],
        // 函数最大语句条数
        "max-statements": [1, { "max": 16 }],
        // 使用 new 实例化对象，类名大写字母开头
        "new-cap": 2,
        // 不使用 Array 构造函数
        "no-array-constructor": 2,
        "no-lonely-if": 2,
        // "no-mixed-operators": 0,
        "no-mixed-spaces-and-tabs": 2, // eslint:recommended
        // 最大两行空白
        "no-multiple-empty-lines": [2, {"max": 2}],
        // 禁用多个空格
        "no-multi-spaces": 2,
        // 禁用 Object 构造函数
        "no-new-object": 2,
        // 禁用 tabs
        "no-tabs": 2,
        // 禁用行末额外的空白
        "no-trailing-spaces": 2,
        // 禁用不需要的三元表达式
        "no-unneeded-ternary": 2,
        // 属性前没有空白
        "no-whitespace-before-property": 2,
        // 在对象 {} 中使用空格
        "object-curly-spacing": [2, "always"],
        // 单独使用声明
        "one-var": [2, {
            "var": "never",
            "let": "never",
            "const": "never",
        }],
        // 在块中禁用大量空白填充
        "padded-blocks": [2, "never"],
        // 在需要使用引号时该对象所有属性都使用引号
        "quote-props": [2, "consistent"],
        // 需要使用 JSDoc
        // "require-jsdoc": [2, {
        //     "require": {
        //         "FunctionDeclaration": true,
        //         "MethodDefinition": false,
        //         "ClassDeclaration": false,
        //     },
        // }],
        // 配置 JSDoc 规则
        "valid-jsdoc": [2, {
            "requireParamDescription": false,
            "requireReturnDescription": false,
            "requireReturn": false,
            "prefer": {"returns": "return"},
        }],
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],
        // 在块语句前使用空格
        "space-before-blocks": 2,
        // 在函数声明后禁用空格
        "space-before-function-paren": [2, "never"],
        // 在中缀操作符之间需要空格
        "space-infix-ops": [2, {"int32Hint": false}],
        // 在一元运算符前后禁用空格
        "space-unary-ops": 2,
        // 在括号首尾禁用空格
        "space-in-parens": 2,
        // 在注释后使用空格
        "spaced-comment": [2, "always"],

        // ES6
        // 设置箭头函数体风格，仅需要使用 return
        "arrow-body-style": [2, "as-needed"],
        // 箭头函数仅在需要时使用 ()
        "arrow-parens": [2, "as-needed"],
        // 箭头函数在 => 前后需要空格
        "arrow-spacing": 2,
        // 设置生成器 * 风格，仅在 * 后面使用空格
        "generator-star-spacing": [2, "after"],
        // 禁止多次 import 统一模块
        "no-duplicate-imports": 2,
        // 在对象字面量对不需要计算的属性禁用 []
        "no-useless-computed-key": 2,
        // 禁用不必要的构造函数
        "no-useless-constructor": 2,
        // 建议在回调函数使用箭头函数
        // "prefer-arrow-callback": 2,
        // 优先使用 const 声明
        "prefer-const": 2,
        // 建议使用 `...` 代替 `arguments`
        "prefer-rest-params": 2,
        //  Prefer the use of the spread operator ... to call variadic functions
        "prefer-spread": 2,
        // 优先使用模板字符串
        "prefer-template": 2,
        // 设置模板字符串变量 {} 风格，不适用空格
        "template-curly-spacing": 2,
        // 使用 let 和 const 代替 var
        "no-var": 2,

        // react
        // 这里关掉属性类型校验
        "react/prop-types": 0,
        // 优先使用 class extends React.Component
        // "react/prefer-es6-class": 2,
        // 没有状态的组件建议使用普通函数代替类
        "react/prefer-stateless-function": 2,
        // 使用帕斯卡命名方式对组件命名
        "react/jsx-pascal-case": 2,
        // 设置 jsx 的语法对齐和缩进
        "react/jsx-closing-bracket-location": 2,
        // 总是在自动关闭的标签前加一个空格，正常情况下也不需要换行
        "react/jsx-tag-spacing": [2, {
            "closingSlash": "never",
            "beforeSelfClosing": "always",
            "afterOpening": "never"
        }],
        // 不要在JSX {} 引用括号里两边加空格
        "react/jsx-curly-spacing": 2,
        // 如果属性值为 true, 可以直接省略
        "react/jsx-boolean-value": 2,
        // 将多行的JSX标签写在 ()
        "react/jsx-wrap-multilines": 2,
        // 对于没有子元素的标签来说总是自己关闭标签
        // "react/self-closing-comp": 2,
        // No .bind() or Arrow Functions in JSX Props
        "react/jsx-no-bind": 2,
        // 设置组件方法顺序
        "react/sort-comp": 2
    }
};
