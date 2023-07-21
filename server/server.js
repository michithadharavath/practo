// const express = require("express");
// const cors = require("cors");
// const app = express();

// app.use(cors());
// app.use(express.json());

// app.get("/message", (req, res) => {
//   res.send({ message: "Hello from server!" });
// });

// app.listen(8000, () => {
//   console.log(`Server is running on port 8000.`);
// });
const express = require("express");
const mongoose = require("mongoose");
const middleware = require("./middleware");
const Registeruser = require("./model");

const jwt = require("jsonwebtoken");
const app = express();
const cors = require("cors");
// const ejs =require("ejs");
// const { default: ForgetPassword } = require("../client/src/ForgetPassword");

mongoose.set("strictQuery", false);
mongoose
  .connect("mongodb+srv://michitha:apitest@cluster0.wijp3bl.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })

  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("hello world");
});
app.use(cors({ origin: "*" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.engine("ejs", require("ejs").__express);
let user = {
  id: "nsjndk",
  email: "michithad@gmail.com",
  password: "Michi@123",
};
//bodyparser
app.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmpassword, mobile, gender } = req.body;
    let exist = await Registeruser.findOne({ email });
    if (exist) {
      return res.status(400).send("user already exist");
    }
    if (password !== confirmpassword) {
      return res.status(400).send("password are not matching");
    }
    let newUser = new Registeruser({
      username,
      email,
      password,
      confirmpassword,
      mobile,
      gender,
    });
    await newUser.save();
    res.status(200).send("Register succesfully");
  } catch (err) {
    console.log(err);
    return res.status(500).send("internal server error");
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    let exist = await Registeruser.findOne({ email });
    if (!exist) {
      return res.status(400).send("user not found");
    }
    if (exist.password !== password) {
      return res.status(400).send("invalid credentials");
    }
    let payload = {
      user: {
        id: exist.id,
      },
    };
    jwt.sign(payload, "jwtSecret", { expiresIn: 3600000 }, (err, token) => {
      if (err) throw err;
      return res.json(token);
    });
  } catch (err) {
    console.log("err");
    return res.status(500).send(" server error");
  }
});

//this is for dashboard protected router its a middleware
app.get("/myprofile", middleware, async (req, res) => {
  // return res.status(200).json(req.headers.authorization);
  try {
    // return res.status(200).send(req.user.id);
    let exist = await Registeruser.findById(req.user.id);
    // return res.status(200).send(req);
    if (!exist) {
      return res.status(500).send(" User Not Found");
    }
    res.status(200).json(exist);
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
});
app.get("/ForgetPassword", (req, res, next) => {
  res.render("Forgetpassword");
});
app.post("/ForgetPassword", (req, res, next) => {
  const { email } = req.body;
  if (email !== user) {
    res.send("user not registered");
    return;
  }
});
// app.get("/resetPassword",(req,res,next)=>{

// })
// app.post("/resetPassword",(req,res,next)=>{

// })
app.get("/message", (req, res) => {
  res.send({ message: "Hello from server!" });
});
app.listen(8000, () => {
  console.log("server is running ....");
});
//mongodb://localhost:27017
console.log();
app.get("/product", (req, res) => {
  res.send({ message: "Hello from server2!" });
});
