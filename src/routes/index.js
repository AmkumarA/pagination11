
import { userCrud } from "./crudRoutes/userCrud.routes.js"

function routes(app) {
    app.use(userCrud)
}
export default routes