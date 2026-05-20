import { prisma } from "../lib/prisma.js";


async function authHome(req, res) {
    res.send("Auth Home Page")
}

async function signUpData(req, res) {
     try {
        console.log("Backend received:", req.body);
        const { user, password } = req.body;

    const newUser = await prisma.user.create({
      data: {
        "name": user,
        "password": password,
      }

    });

    return res.status(200).json({
      success: true,
      message: "Data received successfully",
       user: newUser
    });

  } catch (error) {
    console.error("Signup error:", error);

    return res.status(500).json({
      success: false,
      message: error.message
    });
  }
}

export {signUpData, authHome } 

