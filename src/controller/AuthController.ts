import {Request, Response,} from "express";
import IController from "./ControllerInterface";


// @ts-ignore
class AuthController implements IController {
    create(req: Request, res: Response): Response {
        return res.send("hello");
    }
}

export default new AuthController();
