import express from "express"
import { 
    getUsers, 
    Register,
    Login,
} from "../controllers/Users.js"

import {
    AddCourse 
} from "../controllers/Courses.js"


var router = express.Router()

router.get("/users", getUsers)
router.post("/register", Register)
router.post("/login", Login)
router.post("/add-course", AddCourse)

export default router;