// export type ImportMetaEnv ={
//   VITE_BASE?:string
//   VITE_USE_MOCK?:boolean
//   VITE_USE_LEGACY?: boolean
//   VITE_USE_PROXY?: [string, string][]
//   [key:string]:any
// }
export interface ImportMetaEnv {
  readonly VITE_BASE?:string
  readonly VITE_USE_MOCK?:boolean
  readonly VITE_USE_LEGACY?: boolean
  readonly VITE_USE_PROXY?: [string, string][]
  readonly [key:string]:any
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
