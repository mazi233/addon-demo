import addon from './wrap.js'

const fn = (p) => {
  console.log(p)
}

addon.getCwd(fn)
