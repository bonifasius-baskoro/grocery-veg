import { getCart } from "@/api/cart";
import { getProducts } from "@/api/product"
import { useQuery } from "react-query"


export const  useCart= () =>{
    const {data, isLoading, isError} = useQuery({
        queryKey:['cart'],
        queryFn: async ()=> await getCart()
    })


    return {data , isLoading, isError};

}
