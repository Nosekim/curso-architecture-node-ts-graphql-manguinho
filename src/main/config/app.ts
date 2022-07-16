import express from "express";

import { setupRoutes } from "./routes";
import { setupApolloServer } from "./apollo-server";

const app = express();
setupApolloServer(app);
setupRoutes(app);
export default app;
