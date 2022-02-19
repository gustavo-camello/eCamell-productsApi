import { list } from "@keystone-next/keystone/schema";
import { text, relationship } from "@keystone-next/fields";
import { cloudinaryImage } from "@keystone-next/cloudinary";
import 'dotenv/config';

export const ProductImage = list({
  fields: {
    image: cloudinaryImage({
      cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME || "dzwrfwfuk",
        apiKey: process.env.CLOUDINARY_API_KEY || "924882583299158",
        apiSecret: process.env.CLOUDINARY_API_SECRET || "YzJvT_zEpH6iHWkNl1CdjWtpMKs",
      },
      label: "Source"
    }),
    altText: text(),
    product: relationship({ ref: "Product.photo" })
  },
  ui: {
    listView: {
      initialColumns: ["image", "altText", "product"]
    },
  },
})
