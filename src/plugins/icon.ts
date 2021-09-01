import { App } from 'vue'

import {
  ArrowForwardCircleOutline,
  ArrowBackCircleOutline,
  Search,
  NotificationsOutline,
  ExpandOutline,
  InvertMode,
  InvertModeOutline
} from '@vicons/ionicons5'

interface IIconObj {
  [attr: string]: any
}

const IIconObj: IIconObj = {
  ArrowForwardCircleOutline,
  ArrowBackCircleOutline,
  Search,
  NotificationsOutline,
  ExpandOutline,
  InvertMode,
  InvertModeOutline
}

export function setupIcon(app: App<Element>) {
  for(const k in IIconObj) {
    app.component(k, IIconObj[k])
  }
}
