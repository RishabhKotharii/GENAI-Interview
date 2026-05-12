const express = require("express")
const authController = require("../controllers/auth.controller")

const authRouter = express.Router()

/**
 * @routes POST /api/auth/register
 * @description Register a new user
 * @access Public
 */
authRouter.post("/register",authController.registerUserController)


/**
 * @routes POST /api/auth/login
 * @description Login user 
 * @access Public
 */
authRouter.post("/login",authController.loginUserController)


/**
 * @routes GET /api/auth/logout
 * @description Clear token from user cookie and add token in the blacklist  
 * @access Public
 */
authRouter.get("/logout",authController.logoutUserController)


module.exports=authRouter 