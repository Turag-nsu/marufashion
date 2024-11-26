import { MongoClient } from 'mongodb'
let client;
try{
    client = new MongoClient(process.env.MARU_MONGO_URI as string);
    client.connect();
}catch(e){
    console.error(e);
}

export default client;