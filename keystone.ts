import {config, createSchema} from "@keystone-next/keystone/schema"

import 'dotenv/config';

const databaseURL = process.env.DATABASE_URL || 'mongodb://localhost/eCamellDB';

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 460,
  secret: process.env.SESSION_SECRET
}

export default config({
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

  }),
  ui: {
    isAccessAllowed: () => true
  }
})
