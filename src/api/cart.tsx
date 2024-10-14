import { CartItem } from "@/app/types/project";
import { config } from "@/constant/config_url";

export const getCart = async () => {
  const response = await fetch(config.BASE_URL + config.endpoints.cart);
  const data = (await response.json()) as CartItem[];
  // await new Promise(resolve=>setTimeout(resolve,3*1000))

  return [...data];
};

export const addItem = async (cartItemToAdd: CartItem) => {
  let URL = config.BASE_URL + config.endpoints.cart;

  const response = await fetch(URL, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(cartItemToAdd),
  });
  console.log("item added to cart");
  return response;
};

export const addQuota = async (cartItemToAdd: CartItem) => {
  const response = await fetch(
    `${config.BASE_URL}${config.endpoints.cart}/${cartItemToAdd.id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(cartItemToAdd),
    }
  );
  console.log("quota added");
  return response;
};

export const removeItem = async (cartItemToRemove: CartItem) => {
  const response = await fetch(
    `${config.BASE_URL}${config.endpoints.cart}/${cartItemToRemove.id}`,
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "DELETE",
    }
  );

  console.log("item removed");
  return response;
};
