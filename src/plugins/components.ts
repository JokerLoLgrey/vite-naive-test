import { App } from 'vue'
import components from '@/components'

interface IComponents {
  [attr: string]: any
}

const IComponents: IComponents = components

export function setupComponents(app: App<Element>) {
  for(const k in IComponents) {
    app.component(k, IComponents[k])
  }
}
