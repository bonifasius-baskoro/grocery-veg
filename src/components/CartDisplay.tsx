import { useCart } from "@/hooks/useCart";
import React, { FC, useMemo } from "react";
import CircleCartPict from "./cartDisplay/CircleCartPic";
import { CartItem } from "@/app/types/project";


const calculateTotalCart = (cartData?:CartItem[])=>{
    console.log("calculating..");
    if (!cartData){
        return 0
    }
    return cartData.reduce((sum,item)=>{
        return sum += item.product.price*item.quota
    },0)
}
const CartDisplay: FC = () => {
  const {
    data: cartData,
    isLoading: isLoadingCart,
    isError: isErrorCart,
  } = useCart();

  const totalCart = useMemo(()=>calculateTotalCart(cartData),[cartData])
  

  return (
    <div className="px-2 fixed bottom-0 w-screen -translate-y-8 h-10">
      <div className="bg-black h-full rounded-2xl  px-2  object-center">
        {isLoadingCart ? (
          <h1 className="text-white">Loading...</h1>
        ) : (
          <div className="flex items-center py-2">
            <div className="text-white"> Cart </div>
            <div className="flex ml-2">
                {cartData?.map((element,index)=>(index<2? (<CircleCartPict imageUrl={element.product.imageUrl}/>):""))}
            </div>
            <div className="ml-[60%] pr-2">
                <h1 className="text-base text-white">${totalCart.toFixed(2)} </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDisplay;
