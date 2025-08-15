import { Router} from "express";
import { UserController } from "../controller/userController";


const router = Router();

const controller = new UserController();

router.get('/personagens', controller.listUsers);
router.post('/personagens', controller.createUser);
router.put('/personagens/:id', controller.update);
router.delete('/personagens/:id', controller.delete);
router.get('/personagens/:id', controller.getById);

export default router;
