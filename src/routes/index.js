import express from "express"
import { 
    getUsers, 
    Register,
    Login,
    Logout
} from "../controllers/Users.js"

import {
    AddCourse,
    getCourses 
} from "../controllers/Courses.js"

import { verifyToken } from "../middleware/VerifyToken.js"
import { refreshToken  } from "../controllers/RefreshToken.js"


var router = express.Router()

router.get("/users", verifyToken, getUsers)
router.post("/register", Register)
router.post("/login", Login)
router.post("/add-course", verifyToken, AddCourse)
router.get("/courses", verifyToken, getCourses)
router.get("/refresh-token", refreshToken)
router.delete("/logout", Logout)
export default router;