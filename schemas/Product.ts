import { list } from "@keystone-next/keystone/schema";
import {text, relationship, select, integer, checkbox} from "@keystone-next/fields";

export const Product = list({
  fields: {
    name: text({isRequired: true}),
    description: text({
      ui: {
        displayMode: "textarea"
      },
    }),
    reviews: relationship({ref: 'Review.product', many: true}),
    featured: checkbox({
      defaultValue: false,
    }),
    category: relationship({ref: "ProductCategory.products", many: true}),
    price: integer(),
    photo: relationship({
      ref: "ProductImage.product",
      ui: {
        displayMode: "cards",
        cardFields: ["image", "altText"],
        inlineCreate: { fields: ["image", "altText"]},
        inlineEdit: { fields: ["image", "altText"]},
    }})
  },
  ui: {
    listView: {
      initialColumns: ["name", "category", "photo", "price"]
    },
  },
})
