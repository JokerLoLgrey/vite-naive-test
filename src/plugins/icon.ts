import { App } from 'vue'

import {
  ArrowForwardCircleOutline,
  ArrowBackCircleOutline
} from '@vicons/ionicons5'

interface IIconObj {
  [attr: string]: any
}

const IIconObj: IIconObj = {
  ArrowForwardCircleOutline,
  ArrowBackCircleOutline
}

export function setupIcon(app: App<Element>) {
  for(const k in IIconObj) {
    app.component(k, IIconObj[k])
  }
}
