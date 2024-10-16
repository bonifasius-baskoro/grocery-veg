import ReactQueryProvider from "@/utils/provider/QueryProvider";
import Card from "./Card";
import ProductSelectProvider from "@/utils/provider/ProductSelectProvider";

describe('<Card/>',()=>{
  const mockProduct = {
    id: "0",
    name: "Beetles",
    price: 0.0032,
    weight: 1000,
    category: "Exotic",
    imageUrl: "/products/beetles.png",
    metadata: {
      unit: "g",
      weight: 100,
      calorie: 190,
      proteins: 24,
      fats: 9,
      carbs: 2,
      increment: 100
    }
  }
  it('should render',()=>{
    cy.mount(
      <ReactQueryProvider>
      <ProductSelectProvider>
      <Card data={mockProduct} isInCart={false} isLoading={false} cartData={undefined}/>
      </ProductSelectProvider>
    </ReactQueryProvider>)
    cy.wait(4000)
    cy.get('h2#name').contains(mockProduct.name)
  })
})