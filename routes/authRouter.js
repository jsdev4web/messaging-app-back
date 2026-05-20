import { Router } from "express"
import passport from 'passport';
const authRouter = Router();


import { authHome, signUpData} from "../controllers/authController.js";



authRouter.get("/", authHome);
authRouter.post("/signup", signUpData)

authRouter.post("/login", passport.authenticate("local"), (req, res) => {
  res.json({
    success: true,
    id: req.user.id,
    name: req.user.name,
  });
});

authRouter.get("/log-out", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(err)
    }
    res.redirect("/")
  })
})

export { authRouter };