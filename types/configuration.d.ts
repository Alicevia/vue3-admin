
export type ProjectEnv ={
  VITE_BASE:string
  VITE_USE_LEGACY?: boolean
  VITE_USE_PROXY?: [string, string][]
   [key:string]:any
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ImportMetaEnv extends Partial<ProjectEnv>{
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
