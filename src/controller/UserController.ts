import {Request, Response,} from "express";
import IController from "./ControllerInterface";


let data: any[] = [
    {id: 1, name: "Rivo"},
    {id: 2, name: "Pelu"},
    {id: 3, name: "Budi"},
]

class UserController implements IController {

    index(req: Request, res: Response): Response {
        return res.status(200).json({
            success: true,
            data: data,
        })
    }

    create(req: Request, res: Response): Response {
        const {id, name} = req.body;
        data.push({
            id, name
        });

        return res.status(201).json({
            success: true,
            message: "Success"
        })
    }

    show(req: Request, res: Response): Response {
        const {id} = req.params
        let users = data.find(item => item.id == id);
        if (users) {

            return res.status(200).json({
                success: true,
                data: users
            })
        } else {
            return res.status(404).json({
                succes: true,
                message: "Data Not Found",
            })
        }
    }
    update(req: Request, res: Response): Response {
       const {id} = req.params;
       const {name} = req.body;

        let users = data.find(item => item.id == id);
        users.name = name;
        console.log(id)
        return res.status(200).json({
            success: true,
            message : "success",
        });
    }
    delete(req: Request, res: Response): Response {
        return res.send("hello");
    }



}

export default new UserController();
