import { list } from "@keystone-next/keystone/schema";
import {text, relationship, integer} from "@keystone-next/fields";

export const CartItem = list({
  fields: {
    quantity: integer({
      defaultValue: 1,
      isRequired: true
    }),
    productId: text({isRequired: true}),
    cart: relationship({ref: 'Cart.cartItems'}),
    cartId: text({isRequired: true})
  },
  ui: {
    listView: {
      initialColumns: ["productId", "cart", "quantity"]
    },
  },
})
