export default (to, from, next) => {
  // 设置标题
  // document.title = to.meta.title
  const env = import.meta.env
  console.log(env)
  next()
}
