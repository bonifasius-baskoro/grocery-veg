import { getProducts } from "@/api/product"
import { Product } from "@/app/types/project"
import { useMutation, useQuery } from "react-query"


export const  useProduct= (query:string) =>{
    const {data, isLoading, isError} = useQuery({
        queryKey:['products',{query}],
        queryFn: async ()=> await getProducts(query)
    })

    const getProduct =  (productName :string) =>{
        try{
            const productData = data?.find((prod) => prod.name === productName);
            return productData;
        } catch(e){
            console.error(e);
            return undefined;
        }
        
    }

    const getProductByID =  (id :string) =>{
        try{
            const productData = data?.find((prod) => prod.id === id);
            return productData;
        } catch(e){
            console.error(e);
            return undefined;
        }
        
    }
   

    return {data , isLoading, isError, getProduct,getProductByID};

}
