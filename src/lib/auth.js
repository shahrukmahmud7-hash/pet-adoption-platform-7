import dns from "dns";
dns.setDefaultResultOrder("ipv4first");


import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
console.log(process.env.MONGODB_URI);
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db('petdb');

export const auth = betterAuth({
  database: mongodbAdapter(db, {
    client
  }),
   emailAndPassword: { 
    enabled: true, 
  }, 
  socialProviders: {
        google: { 
            clientId: process.env.GOOGLE_CLIENT_ID, 
            clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
        }, 
  },
}); 