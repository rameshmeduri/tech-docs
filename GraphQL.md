##### GraphQL is a spec that describes:
- QL (Query Language)
- SDL (Schema Definition Language)

##### Operations(GraphQL Model)
- query – a read‐only fetch
- mutation – a write followed by a fetch
- subscription – a long‐lived request that fetches data in response to source events

##### Scalar Types
- Int
- Float
- String
- Boolean
- ID

```js
type Photo {
  id: ID!
  name: String!
  url: String!
  description: String
  rating: Float
  private: Boolean!
}
```

##### Nullable vs Non-nullable
```js
name: String!
description: String
```

##### Query
```js
query($category: PetCategory) {
  allPets(category: $category) {
    id
    name
    weight
    category
  }
}

//Query Variables
{ "category": "DOG" }
```

##### Mutation
```js
//Input Types
mutation addPhoto($input: PostPhotoInput!) {
  postPhoto(input: $input) {
    id
    name
    url
  }
}

//Query Variables
{
  "input": {
    "name": "Desert Sunset",
    "description": "Sunset over Sedona",
    "category": "LANDSCAPE"
  }
}

mutation {
  setLiftStatus(name: "Panorama", newStatus: "hold") {
    name
    newStatus
    oldStatus
  }
}
//response
{
  "data": {
    "setLiftStatus": {
      "name": "Panorama",
      "newStatus": "hold",
      "oldStatus": "open"
    }
  }
}
```

##### Custom Scalars
```js
scalar DateTime
type Photo {
  created: DateTime!
  updated: DateTime!
}
```

##### Pagination
```js
type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: ID!
  endCursor: ID!
}
type CityEdge {
  node: City!
  cursor: ID!
}
type City {
  name: String!
  connections(
     first: Int!, 
     after: ID!
  ): [CityConnection!]!
}
type CityConnection {
  edges: [CityEdge]
  pageInfo: PageInfo!
}
```

##### Union Types
```js
// Definitions
type StudyGroup {
  name: String!
  subject: String!
  students: Int!
}

type Workout {
  name: String!
  reps: Int!
}

union AgendaItem = Workout | StudyGroup

type Query {
  agenda: [AgendaItem!]!
}

// Query
query {
  agenda {
    __typename
    ...StudyGroupFields
    ...WorkoutFields
  }
}

fragment StudyGroupFields on StudyGroup {
  name
  subject
  students
}

fragment WorkoutFields on Workout {
  name
  reps
} 
```