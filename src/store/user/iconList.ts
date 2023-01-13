import { BookOutline, CashOutline, GameControllerOutline } from '@vicons/ionicons5'
import type { Component } from 'vue'
interface IconMapProp{
  [key:string]:Component
}
const iconMap:IconMapProp = {
  BookOutline, CashOutline, GameControllerOutline
}

export { iconMap }
