import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    // 是可选的
    label?:string;
    isMenu?:boolean;
    icon?:string;
    sort?:number
  }
}
