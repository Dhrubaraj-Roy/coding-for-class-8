const { MongoClient } = require('mongodb');

async function runGetStarted() {
  // Replace the uri string with your connection string
  const uri = 'mongodb+srv://dhrubarajroy123_db_user:Iwanttolearn123@learnmongo.7v6xrk0.mongodb.net/?appName=LearnMongo';
  const client = new MongoClient(uri);


  try {

    const database = client.db('CoderArmy');

    const collection = database.collection('user');

    // Queries for a movie that has a title value of 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);
    // console.log(movie);
    

    const newData = await collection.insertOne({name:"Riya", age:19});
    console.log(newData);
    

    const findresult = collection.find({});
    // const ans = await findresult.toArray();
    // console.log(ans);


    for await (const doc of findresult){
      console.log(doc);
      
    }

  } finally {
    await client.close();
  }
}
runGetStarted().catch(console.dir);

