export interface ProductType {
  id: number
  name: string
  image: string
}

export interface NotificationType {
  id: number
  type: string
  title: string
  message: string
  date: string
  read: boolean
  product?: ProductType
}
