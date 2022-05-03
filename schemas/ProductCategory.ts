import { list } from "@keystone-next/keystone/schema";
import {text, relationship} from "@keystone-next/fields";

export const ProductCategory = list({
  fields: {
    name: text({isRequired: true}),
    products: relationship({ref: 'Product.category', many: true}),
  },
  ui: {
    listView: {
      initialColumns: ["name"]
    },
  },
})
