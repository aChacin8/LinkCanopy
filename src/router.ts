import { Router } from "express";
import { createUser } from "./handler";

const router = Router()

router.post('/auth/register',createUser)
export default router