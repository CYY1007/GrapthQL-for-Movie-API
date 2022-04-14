import { createServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import { addMovie, deleteMovie, getById, getMovies, People } from "./db";

const server = createServer({
    schema:{
        typeDefs : typeDefs,
        resolvers : {
            Query:{
                movies : () => getMovies(),
                movie: (_,{id}) =>getById(id)
            },
            Mutation:{
                addMovie : (_,{name,score}) => addMovie(name, score),
                deleteMovie : (_,{id}) => deleteMovie(id)
            }
        }
    }
})

server.start();