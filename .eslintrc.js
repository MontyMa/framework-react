module.exports = {
    extends: [
        'alloy',
        'alloy/react',
        // 'alloy/typescript',
    ],
    // 环境变量（包含多个预定义的全局变量）
    env: {
        // Your environments (which contains several predefined global variables)
        //
        // browser: true,
        // node: true,
        // mocha: true,
        // jest: true,
        // jquery: true
    },
    // 全局变量（设置为 false 表示它不允许被重新赋值）
    globals: {
        // myGlobal: false
    },
    // 自定义规则
    rules: {
        // 必须分号结尾
        'semi': ['error'],
        // 必须四个缩进
        'indent': ['error', 4],
        // 声明的变量必须使用
        'no-unused-vars': [
            'error',
            {
                'vars': 'all',
                'args': 'none',
                'caughtErrors': 'none'
            }
        ],
        // jsx 缩进
        'react/jsx-indent': ['error', 4],
        // jsx props 缩进
        'react/jsx-indent-props': ['error', 4],
        'no-multiple-empty-lines': ['error', {'max': 2}],// 空行最多不超过2行
        'no-alert': 'error',
        'no-caller': 'error',// 禁止使用arguments.caller或arguments.callee
        'no-catch-shadow': 'error',// 禁止catch子句参数与外部作用域变量同名
        'no-class-assign': 'error',// 禁止给类赋值
        'no-cond-assign': 'error',// 禁止在条件表达式中使用赋值语句
        'no-const-assign': 'error',// 禁止修改const声明的变量
        'no-constant-condition': 'error',// 禁止在条件中使用常量表达式if(true)if(1)
        'no-continue': 'error',// 禁止使用continue
        'no-control-regex': 'error',// 禁止在正则表达式中使用控制字符
        'no-delete-var': 'error',// 不能对var声明的变量使用delete操作符
        'no-var': 'error',// 禁用var，用let和const代替
        'no-div-regex': 'error',// 不能使用看起来像除法的正则表达式/=foo/
        'no-dupe-keys': 'error',// 在创建对象字面量时不允许键重复{a:1,a:1}
        'no-dupe-args': 'error',// 函数参数不能重复
        'no-duplicate-case': 'error',// switch中的case标签不能重复
        'no-else-return': 'error',// 如果if语句里面有return,后面不能跟else语句
        'no-empty': 'error',// 块语句中的内容不能为空
        'no-empty-character-class': 'error',// 正则表达式中的[]内容不能为空
        'no-eq-null': 'error',// 禁止对null使用==或!=运算符
        'no-eval': 'error',// 禁止使用eval
        'no-ex-assign': 'error',// 禁止给catch语句中的异常参数赋值
        'no-extend-native': 'error',// 禁止扩展native对象
        'no-extra-bind': 'error',// 禁止不必要的函数绑定


        'no-extra-boolean-cast': 'error',// 禁止不必要的bool转换
        'no-extra-parens': 'error',// 禁止非必要的括号
        'no-extra-semi': 'error',// 禁止多余的冒号
        'no-fallthrough': 'error',// 禁止switch穿透
        'no-floating-decimal': 'error',// 禁止省略浮点数中的0.53.
        'no-func-assign': 'error',// 禁止重复的函数声明
        'no-implicit-coercion': 'error',// 禁止隐式转换
        'no-implied-eval': 'error',// 禁止使用隐式eval
        'no-inner-declarations': ['error', 'functions'],// 禁止在块语句中使用声明（变量或函数）
        'no-invalid-regexp': 'error',// 禁止无效的正则表达式
        'no-invalid-this': 'error',// 禁止无效的this，只能用在构造器，类，对象字面量
        'no-irregular-whitespace': 'error',// 不能有不规则的空格
        'no-iterator': 'error',// 禁止使用__iterator__属性
        'no-label-var': 'error',// label名不能与var声明的变量名相同
        'no-lone-blocks': 'error',// 禁止不必要的嵌套块
        'no-lonely-if': 'error',// 禁止else语句内只有if语句
        'no-loop-func': 'error',// 禁止在循环中使用函数（如果没有引用外部变量不形成闭包就可以）
        'no-mixed-requires': 'error',// 声明时不能混用声明类型
        'no-mixed-spaces-and-tabs': 'error',// 禁止混用tab和空格
        'no-multi-spaces': 'error',// 不能用多余的空格
        'no-multi-str': 'error',// 字符串不能用\换行
        'no-native-reassign': 'error',// 不能重写native对象
        'no-negated-in-lhs': 'error',// in操作符的左边不能有!
        'no-nested-ternary': 'error',// 禁止使用嵌套的三目运算
        'no-new': 'error',// 禁止在使用new构造一个实例后不赋值
        'no-new-object': 'error',// 禁止使用newObject()
        'no-new-require': 'error',// 禁止使用newrequire
        'no-new-wrappers': 'error',// 禁止使用new创建包装实例，newStringnewBooleannewNumber
        'no-obj-calls': 'error',// 不能调用内置的全局对象，比如Math()JSON()
        'no-octal': 'error',// 禁止使用八进制数字
        'no-octal-escape': 'error',// 禁止使用八进制转义序列
        'no-param-reassign': 'error',// 禁止给参数重新赋值
        'no-redeclare': 'error',// 禁止重复声明变量
        'no-regex-spaces': 'error',// 禁止在正则表达式字面量中使用多个空格/foobar/
        'no-script-url': 'error',// 禁止使用javascript:void(0)
        'no-self-compare': 'error',// 不能比较自身
        'no-sequences': 'error',// 禁止使用逗号运算符
        'no-shadow': 'error',// 外部作用域中的变量不能与它所包含的作用域中的变量或参数同名
        'no-shadow-restricted-names': 'error',// 严格模式中规定的限制标识符不能作为声明时的变量名使用
        'no-spaced-func': 'error',// 函数调用时函数名与()之间不能有空格
        'no-sparse-arrays': 'error',// 禁止稀疏数组，[1,,2]
        'no-this-before-super': 'error',// 在调用super()之前不能使用this或super
        'no-throw-literal': 'error',// 禁止抛出字面量错误throw"error";
        'no-undef': 'error',// 不能有未定义的变量
        'no-undef-init': 'error',// 变量初始化时不能直接给它赋值为undefined
        'no-unexpected-multiline': 'error',// 避免多行表达式
        'no-unneeded-ternary': 'error',// 禁止不必要的嵌套varisYes=answer===1?true:false;
        'no-unreachable': 'error',// 不能有无法执行的代码
        'no-use-before-define': 'error',// 未定义前不能使用
        'no-useless-call': 'error',// 禁止不必要的call和apply
        'no-void': 'error',// 禁用void操作符
        'no-warning-comments': ['error', {'terms': ['todo', 'fixme', 'xxx'], 'location': 'start'}],// 不能有警告备注
        'no-with': 'error',// 禁用with
        'array-bracket-spacing': ['error', 'never'],// 是否允许非空数组里面有多余的空格
        'arrow-spacing': 'error',// =>的前/后括号空格
        'block-scoped-var': 'error',// 块语句中使用var
        'brace-style': [1, '1tbs'],// 大括号风格
        'camelcase': 2,// 强制驼峰法命名
        'comma-dangle': [2, 'never'],// 对象字面量项尾不能有逗号
        'comma-spacing': 'error',// 逗号前后的空格
        'comma-style': [2, 'last'],// 逗号风格，换行时在行首还是行尾
        'complexity': [0, 11],// 循环复杂度
        'computed-property-spacing': [0, 'never'],// 是否允许计算后的键名什么的
        'consistent-this': ['error', 'that'],// this别名
        'constructor-super': 'error',// 非派生类不能调用super，派生类必须调用super
        'curly': ['error', 'all'],// 必须使用if(){}中的{}
        'default-case': 'error',// switch语句最后必须有default
        'eqeqeq': 2,// 必须使用全等
        'func-names': 'error',// 函数表达式必须有名字
        'generator-star-spacing': 'error',// 生成器函数*的前后空格
        'guard-for-in': 'error',// forin循环要用if语句过滤
        'id-length': ['error', {'max': 30, 'min': 2}],// 变量名长度
        'init-declarations': 2,// 声明时必须赋初值
        'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],// 对象字面量中冒号的前后空格
        'new-cap': 2,// 函数名首行大写必须使用new方式调用，首行小写必须用不带new方式调用
        'new-parens': 2,// new时必须加小括号
        'operator-linebreak': [2, 'after'],// 换行时运算符在行尾还是行首
        'prefer-const': 2,// 首选const
        'quotes': [2, 'single'],// 引号类型``""''
        'radix': 2,// parseInt必须指定第二个参数
        'id-match': 1,// 命名检测
        'space-before-blocks': [2, 'always'],// 不以新行开始的块{前面要不要有空格
        'space-in-parens': [2, 'never'],// 小括号里面要不要有空格
        'space-unary-ops': [0, {'words': true, 'nonwords': false}],// 一元运算符的前/后要不要加空格
        'spaced-comment': 0,// 注释风格要不要有空格什么的
        'strict': 2,// 使用严格模式
        'use-isnan': 2,// 禁止比较时使用NaN，只能用isNaN()
        'valid-typeof': 2,// 必须使用合法的typeof的值
        'vars-on-top': 2,// var必须放在作用域顶部
        'wrap-iife': [2, 'inside'],// 立即执行函数表达式的小括号风格
        'yoda': [2, 'never']// 禁止尤达条件
    }
};
