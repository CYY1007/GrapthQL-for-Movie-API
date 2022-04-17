import { createServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import { getMovies, getMovieDetail,getMovieSuggestion} from "./db";

const server = createServer({
    schema:{
        typeDefs : typeDefs,
        resolvers : {
            Query:{
                movies : (_,{limit,rating}) => getMovies(limit,rating),
                movie : (_,{id}) => getMovieDetail(id),
                suggestion : (_,{id}) => getMovieSuggestion(id),
            },
        }
    }
})

server.start();