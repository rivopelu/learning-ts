import express, {Application, Request, Response} from "express";
import colors from 'colors';
import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";

// ROUTES
import userRoutes from "./src/routes/UserRoutes";
import authRoutes from "./src/routes/AuthRoutes";

class App {
    public app: Application;
    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }
    protected plugins(): void {
        this.app.use(bodyParser.json());
        this.app.use(express.json());
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
    }
    protected routes(): void {
        const path : string = "/api/v1"
        this.mainMessage()
        this.app.use( path + "/users", userRoutes)
        this.app.use( path + "/users", authRoutes)
    }
    protected mainMessage() : void {
        this.app.get("/", (req: Request, res: Response) => {
            res.status(200).json({
                message : "Hello Welcome"
            })
        })
    }
}

const port: number = 8080;
const app = new App().app

app.listen(port, () => {
    console.log(colors.bgBlue.black.bold.italic("listening on port " + port))
})

