import express from "express";
import { deleteUser, getAllUser, updateUser, userCreate } from "../../controller/user.controller.js";
const routes = express.Router();

routes.post("/createUser",userCreate);
routes.put("/userUpdate",updateUser);
routes.delete("/deleteUser/:id",deleteUser);
routes.get("/getAllUserDetails",getAllUser)

export{routes as userCrud}