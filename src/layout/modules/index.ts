const components = import.meta.globEager('./*.vue')

interface ILayoutComponentsObj {
  [attr: string]: any
}

const layoutComponentsObj: ILayoutComponentsObj = {}

Object.keys(components).forEach((key: string) => {
  if (components[key] && components[key].default) {
    const mod = components[key].default
    layoutComponentsObj[mod.name] = mod
    delete mod.name
  }
})

console.log(layoutComponentsObj)

export default layoutComponentsObj
