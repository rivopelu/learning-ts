import {Router, Request, Response} from "express";

// CONTROLLERS
import UserController from "../controller/UserController";
import BaseRoutes from "./ThisRouter";
import {auth} from "../middleware/AuthMiddleware";



class UserRoutes extends BaseRoutes{
    public routes(): void {
        this.router.get("/", auth, UserController.index);
        this.router.post("/", UserController.create);
        this.router.get("/:id", UserController.show);
        this.router.put("/:id", UserController.update);
        this.router.delete("/:id", UserController.delete)
    }
}

export default new UserRoutes().router;
