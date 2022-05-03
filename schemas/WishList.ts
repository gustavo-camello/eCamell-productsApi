import { list } from "@keystone-next/keystone/schema";
import {text, relationship} from "@keystone-next/fields";

export const WishList = list({
  fields: {
    customerId: text({isRequired: true, isUnique: true}),
    wishListItems: relationship({ref: 'WishListItem.wishList', many: true})
  },
})
