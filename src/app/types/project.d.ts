export interface Product {
    price: number
    weight: number
    name: string
    category: string
    imageUrl: string
    metadata: Metadata
    id: string
  }
  
  export interface Metadata {
    unit: string
    weight: number
    calorie: number
    proteins: number
    fats: number
    increment: number
    carbs: number
  }
  
  export interface CartItem{
    product: Product,
    quota: number,
    
  }