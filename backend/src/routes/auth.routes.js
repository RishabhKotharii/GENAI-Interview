const express = require("express")
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

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


/**
 * @route GET /api/auth.get-me
 * @description get the current logged in user details
 *  @access  private
 */
authRouter.get("/get-me",authMiddleware.authUser,authController.getMeController)


module.exports=authRouter 
