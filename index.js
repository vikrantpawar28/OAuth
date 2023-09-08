require('dotenv').config();
const express = require("express");
const passport = require('passport');
const mongoose = require("mongoose");
const googleStrategy = require("passport-google-oauth20")
const user = require("./model/OAuth")
const app = express();

const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.set("view engine", 'ejs')

passport.use(new googleStrategy({
    clientID:'492637960910-43afom8v05got9f68l1gs7qa0msap5vu.apps.googleusercontent.com',
    clientSecret:'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',
    callbackURL:'/auth/google/callback'
},(accessToken,refreshToken,profile,done)=>{
    console.log(accessToken),
    console.log(refreshToken), 
    console.log(profile)

}))
app.get("/auth/google",passport.authenticate("google",{
    scope:["profile","email"]
}))
app.get("/auth/google/callback",passport.authenticate("google"));

async function main() {
    await mongoose.connect(process.env.MONGO_URI);
}
main().then(() => console.log(`[reached] database connected`));
main().catch((err) => console.error(err));

app.listen(PORT, HOST, () => {
    console.log(`[ready] http://${HOST}:${PORT}`)
})