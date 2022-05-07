# Basic-MongoDB-API
Very basic MongoDB API with CRUD operations. Ready for deployment to Heroku or any other deployment environment. 

## Pointing mongoose to your database's URL
- Create a `.env` file with the following: `DATABASE_URL = <Your MongoDB URL>` and save it in the root directory.

## Note
- In order to use your own MongoDb data model, it is necessary to change the `model.js` file to accommodate your schema. 
- Route endpoints can be changed as you deem fit. It's honestly personal preference and use case dependant. 
- Originally this API was used for a VERY basic Flutter Quiz App. Keep that in mind.

## References
- [FreeCodeCamp](https://www.freecodecamp.org/news/build-a-restful-api-using-node-express-and-mongodb/)