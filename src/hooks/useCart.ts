import { addItem, addQuota, getCart, removeItem } from "@/api/cart";
import { getProducts } from "@/api/product"
import { useMutation, useQuery, useQueryClient } from "react-query"


export const  useCart= () =>{
    const queryClient = useQueryClient();
    const {data, isLoading, isError} = useQuery({
        queryKey:['cart'],
        queryFn: async ()=> await getCart()
    })


    const {mutateAsync : addCartMutation}= useMutation(
        {   
            mutationFn:addItem,
            onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey:['cart']});
            },
        }
    );

    const {mutateAsync : addQuotaMutation}= useMutation(
        {   
            mutationFn:addQuota,
            onSuccess: ()=>{
                queryClient.invalidateQueries({queryKey:['cart']});
            },
        }
    );

    const {mutateAsync: removeCartItemMutation}= useMutation(
        {
            mutationFn:removeItem,
            onSuccess:()=>{
                queryClient.invalidateQueries({queryKey:['cart']});
            },
        }
    )

    


    return {data , isLoading, isError, addCartMutation, addQuotaMutation, removeCartItemMutation};

}

