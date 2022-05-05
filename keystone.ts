import { config, createSchema } from "@keystone-next/keystone/schema";
import { createAuth } from "@keystone-next/auth";
import { withItemData, statelessSessions } from "@keystone-next/keystone/session";
import 'dotenv/config';

import { User } from "./schemas/User";
import { Product } from "./schemas/Product";
import { ProductImage } from "./schemas/ProductImage";
import { Review } from "./schemas/Review";
import { ProductCategory } from "./schemas/ProductCategory";
import { WishList } from "./schemas/WishList";
import { WishListItem } from "./schemas/WishListItem";
import { Cart } from "./schemas/Cart";
import { CartItem } from "./schemas/CartItem";
import { OrderItem } from "./schemas/OrderItem";
import { Order } from "./schemas/Order";
import { Customer } from "./schemas/Customer";
import { Storefront } from "./schemas/Storefront";

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/eCamellDB';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 460,
  secret: process.env.SESSION_SECRET
}

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ["name", "email", "password"],
  }
})

export default withAuth(config({
  server: {
    cors: {
      origin: [process.env.FRONTEND_URL],
      credentials: true
    }
  },
  db: {
    adapter: "mongoose",
    url: databaseURL
  },
  lists: createSchema({
    User,
    Product,
    ProductImage,
    Review,
    ProductCategory,
    WishList,
    WishListItem,
    Cart,
    CartItem,
    OrderItem,
    Order,
    Customer,
    Storefront,

  }),
  
  ui: {
    // Show the UI to users that has access
    isAccessAllowed: ({ session }) => {
      console.log({session})
      return session?.data
;    }
  },
  
  session: withItemData(statelessSessions(sessionConfig), {
    User: "id name email"
  })
}))
