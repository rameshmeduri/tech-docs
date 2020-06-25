#### API Design in Node with Express
------------------------------------

##### API
---------
- a server that creates an `HTTP Interface` for interacting with some data
- combines `DB resources`, `route paths`, `HTTP verbs`

##### Middleware
----------------
- list of functions that execute, in order, before your controllers
- Allow you to execute functions on an incoming request with guaranteed order

##### Express
-------------
- Routes match in the order that they were defined (top to bottom)
- Middleware can be added to any and all routes with many different configurations

##### Mongoose
--------------
- You should always use a Schema for models
- Schemas hold the instructions for models. Things like  validations, names, indexes, and hooks
- Models will represent our REST resources
- Controllers are just middleware but with the intent on returning some data
- Can generalize controllers to work for many models because we're going with a REST approach which requires CRUD actions on resources
- Mongoose models work very nicely with CRUD
- C - model.create(), new model()
- R - model.find(), model.findOne(), model.findById()
- U - model.update(), model.findByIdAndUpdate(), model.findOneAndUpdate()
- D - model.remove(), model.findByIdAndUpdate(), model.findOneAndRemove()
- we need to hook our routes up to our models so we can perform CRUD on the models based on the routes + verbs. That's exactly what controllers do
- Authentication is controlling if an incoming request can proceed or not
- Authorization is controlling if an authenticated request has the correct permissions to access a resource
- Identification is determining who the requester is
- A bearer token strategy that allows the API to be stateless with user auth
- After successful verification, JWT payload is accessible to the server. Can be used to authorization and identification

- [ ] create a type on the schema string
- [ ] create a query field for your type in the schema string
- [ ] create a resolver for your query
- [ ] add your resolver to the server
- [ ] start the server and explore your API using GraphQL playground


##### GraphQL
-------------
- Strongly typed query language and runtime for your data
- Gives clients the power to describe exactly what data they want
- Can sit in front of any existing API because its just a query language
- GraphQL only has one URL. It does not need a resource url + verb combo. The request details are in a POST body
- In REST, the shape and size of the data resource is determined by the server, with Graphql its determined by the query (request)
- In REST, the shape of the response is determined by whom ever created the server, in GraphQL the shap is determined by the query
- In REST, a single request will execute on controller on the server, in GraphQL a request might execute MANY resolvers on the server
- DB Schema is for keeping data consistent when entering our DB
- GraphQL schema is for defining what resources are available for querying, how they relate, and how you can query them

- Scalar types are built in primitives
  - String
  - Int
  - Float
  - Boolean
  - ID








































