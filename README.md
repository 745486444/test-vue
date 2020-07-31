# test-vue

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


###eslint忽略規則
```
      /**
     * 这里的数字：0表示不不处理，1表示警告，2表示错误
     * */

      "no-trailing-spaces": 0,//一行结束后面不要有空格
      "no-multiple-empty-lines": 0,//不能有空行
      "brace-style": 0, // if while function 后面的{必须与if在同一行，java风格。
      "indent": 0,//缩进风格
      "padded-blocks": 0,// 块语句内行首行尾是否要空行,首位空行开启规则则为非法
      "keyword-spacing": 0, //关键字是否需要带空格，if(L < 0)开启规则则为非法,需要在if后加上空格if (L < 0)
      "space-in-parens": 0,//小括号里面要不要有空格 if ( L < 0 )开启规则则为非法,需要去除空格if (L < 0)
      "space-infix-ops": 0,//中缀操作符周围要不要有空格,let a=null;开启规则则为非法,需要在=前后加空格let a = null;
      "space-before-blocks": 0,//不以新行开始的块{前面要不要有空格function a (){}开启规则则为非法,需要在{前加空格function a () {}
      "space-before-function-paren": 0,//函数定义时括号(前面要不要有空格,function a(){}开启规则则为非法,需要在括号(前加空格function a (){}
      "spaced-comment": 0,//注释符号后是否需要空格 //test 和/*test*/开启规则则为非法，需要加上空格// test 和/* test */
      "comma-dangle": 0, // 数组和对象键值对最后一个逗号 {a:1, b:2,}开启规则则为非法，需要去除最后一个逗号{a:1, b:2}
      "object-curly-spacing": 0, // 大括号内是否需要前后空格 {a:1,b:2}开启规则则为非法，大括号内前后需要加上空格{ a:1,b:2 }
      "standard/object-curly-even-spacing": 0, // 大括号内是否可以奇数个空格需要前后空格 { a:1,b:2}开启规则则为非法，大括号加上或去掉一个空格{ a:1,b:2 }或{a:1,b:2}
      "vue/no-use-v-if-with-v-for": 0, // 去除不能同时使用v-for和v-if的警告
      "vue/require-v-for-key": 0, // v-for语句中是否必须要有key
      "comma-spacing": 0, // 控制逗号前后的空格 {a:1,b:0}开启规则则为非法，逗号之后需要控告{a:1, b:0}
      "key-spacing": 0,//对象字面量中冒号的前后空格{a:1}开启规则则为非法，冒号之后需要空格{a: 1}
      "no-unused-vars": 0, // 不能有声明后未被使用的变量或参数，开启规则则后，定义变量后不使用为非法
      "semi": 0, //语句结尾不需要分号结尾，let a = null;开启规则则后非法,需要去除分号
      'quotes': 0, //是否限制引号类型
      "no-multi-spaces": 0,//不能用多余的空格
      'no-console': 0,
      'no-debugger': 0,
      "no-irregular-whitespace": 0
```