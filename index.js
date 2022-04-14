import { createServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import { getMovies} from "./db";

const server = createServer({
    schema:{
        typeDefs : typeDefs,
        resolvers : {
            Query:{
                movies : (_,{limit,rating}) => getMovies(limit,rating),
            },
        }
    }
})

server.start();