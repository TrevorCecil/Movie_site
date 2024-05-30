import app from "./server.js";
import mongodb from "mongodb";
import ReviewsDAO from "./dao/ReviewsDAO.js";

const MongoClient = mongodb.MongoClient;
const uri = `mongodb+srv://trevor:tr3x4321@trevor.dxf9pdd.mongodb.net/`;

const port = 8000;

MongoClient.connect(uri, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    await ReviewsDAO.injectDB(client);
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  });
