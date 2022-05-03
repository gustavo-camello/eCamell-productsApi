import { list } from "@keystone-next/keystone/schema";
import {text, relationship} from "@keystone-next/fields";

export const WishListItem = list({
  fields: {
    productId: text({isRequired: true}),
    wishList: relationship({ref: 'WishList.wishListItems'}),
    wishListId: text({isRequired: true})
  },
})
