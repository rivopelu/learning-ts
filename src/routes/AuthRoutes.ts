import AuthController from "../controller/AuthController";
import BaseRoutes from "./ThisRouter";
class AuthRoutes extends BaseRoutes {
    public routes(): void {
        this.router.get("/", AuthController.create);
    }
}
export default new AuthRoutes().router;
