import passport from "passport";
import { Strategy as LocalStrategy } from 'passport-local';

import { prisma } from "../lib/prisma.js";

//import bcrypt from 'bcryptjs'

//follow jsdev4web/auth project live - template

// this function checks the database for matching user/pass
const logins = passport => {
     passport.use(
    new LocalStrategy(async (username, password, done) => {
      try {
        // Find user by username
        const user = await prisma.user.findFirst({
          where: {
            name: username,
          },
        });

        if (!user) {
          return done(null, false, {
            message: "Incorrect username",
          });
        }

        // Compare passwords, i am not using bcrypt!!
        //const match = await bcrypt.compare(password, user.password);

        // Compare passwords directly (plain text)
        if (password !== user.password) {
          return done(null, false, {
            message: "Incorrect password",
          });
        }

        return done(null, user);
      } catch (err) {
        return done(err);
      }
    })
  );

  // both of these functions are session data
  passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    done(null, user);
  } catch (err) {
    done(err);
  }
});


}

export { logins }