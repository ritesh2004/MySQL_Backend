import { Router } from "express";
import { createNote, getNote, getNotes } from "../controllers/note.controllers.js";

const noteRouter = Router();

noteRouter.post("/create",createNote);

noteRouter.get("/notes",getNotes);

noteRouter.get("/note/:id",getNote);

export default noteRouter;