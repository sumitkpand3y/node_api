import express from "express";
import {MongoClient} from "mongodb"
// import {config} from "./config/config"

const app = express();
const uri = "mongodb://localhost:27017"

const databaseName = "youtube"

const client = new MongoClient(uri);

 export async function dbConnect(){
    let result = await client.connect();
    let db = result.db(databaseName);
    let collection = db.collection("videos");
    return collection
}