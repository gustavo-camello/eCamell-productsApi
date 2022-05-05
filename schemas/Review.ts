import { list } from "@keystone-next/keystone/schema";
import {text, relationship, integer} from "@keystone-next/fields";

export const Review = list({
  fields: {
    review: text(),
    customerId: text(),
    rating: integer(),
    product: relationship({ref: 'Product.reviews'})
  },
  ui: {
    listView: {
      initialColumns: ["review", "rating", "customerId", "product"]
    },
  },
})
