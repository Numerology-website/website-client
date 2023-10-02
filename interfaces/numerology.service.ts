export interface INumerology {
  id: string
  number: number
  description?: string
  contents: INumerologyContent[]
}

export interface INumerologyContent {
  blockOrder: number
  value: string
  title: string
  description?: string
}
