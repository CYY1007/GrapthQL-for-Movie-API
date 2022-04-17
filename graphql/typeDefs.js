const typeDefs = `
    type Movie{
        id: Int!
        title: String!
        rating : Float!
        summary : String!
        medium_cover_image: String!
    }
    type Detail{
        id: Int!
        title: String!
        rating : Float!
        medium_cover_image: String!
        description_full: String!
    }
    type Query {
        movies(limit:Int rating:Float) : [Movie]!,
        movie(id:Int) :Detail
        suggestion(id:Int):[Movie]
    }`;

export default typeDefs;