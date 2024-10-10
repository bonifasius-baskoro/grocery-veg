import { Product } from "@/app/types/project";
import { config } from "@/constant/config_url"

export const getProducts = async (query="") =>{

    const response = await fetch (config.BASE_URL + config.endpoints.products);
    const data = await response.json() as Product[];
    await new Promise(resolve=>setTimeout(resolve,3*1000))

    const filteredProducts = data.filter((product)=>product.name.toLowerCase().includes(query.toLowerCase()));

    return [...filteredProducts];

}


