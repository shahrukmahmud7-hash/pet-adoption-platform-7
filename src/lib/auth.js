import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";


const client = new MongoClient('mongodb+srv://petnest:QJGBtkS9elV2WRyD@cluster0.z8vzc2i.mongodb.net/?appName=Cluster0');
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
            clientId: process.env.GOOGLE_CLIENT_ID , 
            clientSecret: process.env.GOOGLE_SECRET , 
        }, 
    }, 
     
});