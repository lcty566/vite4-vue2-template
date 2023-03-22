module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'standard'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'vue'
  ],
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 函数前面必须要有一个空格，关闭这个校验
    'space-before-function-paren': 0,
    // 关闭未调用报错
    'no-unused-vars': 'off',
    // 表达式
    'no-unused-expressions ': 'off',
    // 驼峰
    camelcase: 'off'
  }
}
