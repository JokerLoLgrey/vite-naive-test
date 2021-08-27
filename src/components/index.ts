const components = import.meta.globEager('./**/*.vue')

interface IComponentsObj {
  [attr: string]: any
}

const componentsObj: IComponentsObj = {}

Object.keys(components).forEach((key: string) => {
  if (components[key] && components[key].default) {
    const mod = components[key].default
    componentsObj[mod.name] = mod
    delete mod.name
  }
})

console.log(componentsObj)

export default componentsObj
