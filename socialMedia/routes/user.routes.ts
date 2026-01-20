import { Router } from "express";
import createUser from "../controllers/createUser.controller";
import getAllUsers from "../controllers/getAllUsers.controller";

const router = Router();

router.post("/users", createUser);
router.get("/users", getAllUsers);

export default router;
