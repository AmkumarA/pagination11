import express from 'express';
import { dbConnection } from './src/db/dbConnection.js';
import routes from './src/routes/index.js';
const app = express();
app.use(express.json())
// empty routes for check api work or not
app.get('/', (req, res, next) => {
    res.send("app is working ")
})
routes(app)


app.listen(8054, async () => {
    await dbConnection()
    console.log("server is running on port 8054")
})