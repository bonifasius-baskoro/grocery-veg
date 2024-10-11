import { CartItem } from "@/app/types/project";
import { config } from "@/constant/config_url"

export const getCart = async () =>{

    const response = await fetch (config.BASE_URL + config.endpoints.cart);
    const data = await response.json() as CartItem[];
    await new Promise(resolve=>setTimeout(resolve,3*1000))
    console.log("your cart:", JSON.stringify(data))
    

    return [...data];

}


