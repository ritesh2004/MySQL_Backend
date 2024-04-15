import { Router } from "express";
import { createNote, getNote, getNotes } from "../controllers/note.controllers.js";
import verifyUser from "../middleware/auth.middleware.js";

const noteRouter = Router();

noteRouter.post("/create",verifyUser,createNote);

noteRouter.get("/notes",getNotes);

noteRouter.get("/note/:id",getNote);

export default noteRouter;