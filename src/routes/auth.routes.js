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

module.exports=authRouter 