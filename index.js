import { createServer } from "graphql-yoga";
import typeDefs from "./graphql/typeDefs";
import { getById, People } from "./db";

const server = createServer({
    schema:{
        typeDefs : typeDefs,
        resolvers : {
            Query:{
                people : () => People,
                person: (_,{id}) =>getById(id)
            },
        }
    }
})

server.start();