const typeDefs = `
    type Movie{
        id: Int!
        title: String!
        rating : Float!
        summary : String!
        language: String!
        medium_cover_image: String!
    }
    type Query {
        movies(limit:Int rating:Float) : [Movie]!
    }
`;

export default typeDefs;