const views = import.meta.globEager('./**/*.vue')

interface IViewsObj {
  [attr: string]: any
}

const viewsObj: IViewsObj = {}

Object.keys(views).forEach((key: string) => {
  if (views[key] && views[key].default) {
    const mod = views[key].default
    viewsObj[mod.module] = {
      [mod.name]: mod
    }
    delete mod.module
    delete mod.name
  }
})

export default viewsObj
