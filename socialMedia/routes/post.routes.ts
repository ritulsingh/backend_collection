import { Router } from "express";
import createPost from "../controllers/createPost.controller";
import getAllPosts from "../controllers/getAllPosts.controller";

const router = Router();

router.post("/posts", createPost);
router.get("/posts", getAllPosts);

export default router;
