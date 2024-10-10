import { getProducts } from "@/api/product"
import { useQuery } from "react-query"


export const  useProduct= (query:string) =>{
    const {data, isLoading, isError} = useQuery({
        queryKey:['products',{query}],
        queryFn: async ()=> await getProducts(query)
    })


    return {data, isLoading, isError};

}
