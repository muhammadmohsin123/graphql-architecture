const { buildSchema } = require("graphql");
module.exports = buildSchema(`
type Query {
    events:[Event!]!
    users:[User!]!
    bookings:[Booking!]!
    
}


type Booking {
    _id:ID!
    event:Event!
    user:User!
    createdAt:String!
    updatedAt:String!
}
type User {
  _id:ID!
  email:String!
  password:String
  createdEvents:[Event!]
}
type Event {
  _id:ID!
  title:String!
  description:String!
  price:Float!
  date:String!
  creator:User!
}
type Mutation {
  createUser(input:Userinput!):User!
  createEvent(input:Eventinput!):Event!
  bookEvent(eventId:ID!):Booking!
  cancelBooking(bookingId:ID!):Event!
}
input Userinput {
  email:String!
  password:String
}
input Eventinput {
  title:String!
  description:String!
  price:Float!
  date:String!
}
`);
