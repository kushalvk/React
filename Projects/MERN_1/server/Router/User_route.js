const express = require("express");
const UserModel = require("../Model/UserSchema");
const multer = require("multer");
const path = require("path");
const jwt = require("jsonwebtoken");

const router = express.Router()

router.post("/login", async (req, res) => {
    const {username, Password, role} = req.body.form;

    const user = await UserModel.findOne({username, Password, role})

    if (!user) {
        res.json("Data not Found")
    } else {
        const token = await user.generateAuthToken();
        res.json({user, token});
    }
})

// Set up multer for file storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./Images");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    },
});
const upload = multer({storage: storage});

// Add user route
router.post("/adduser", upload.single("photo"), (req, res) => {
    const {username, fname, Password, role, dob, number, address, city} = req.body;
    const photo = req.file ? req.file.filename : null; // File path of uploaded photo

    UserModel.create({username, fname, Password, role, dob, number, address, city, photo})
        .then((data) => res.json(data))
        .catch((err) => res.json(err));
});

router.get("/alluser", (req, res) => {
    UserModel.find()
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
})

router.delete("/user/delete/:id", (req, res) => {
    const deleteId = req.params.id;
    UserModel.findByIdAndDelete(deleteId)
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
})

router.put("/user/update/done/:id", upload.single("photo"), (req, res) => {
    const id = req.params.id;
    const {username, fname, Password, role, dob, number, address, city} = req.body;
    const photo = req.file ? req.file.filename : null; // File path of uploaded photo

    UserModel.findByIdAndUpdate(id, {username, fname, Password, role, dob, number, address, city, photo})
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
})

router.get("/user/update/:id", (req, res) => {
    const updateId = req.params.id;
    UserModel.findById(updateId)
        .then((data) => res.json(data))
        .catch((err) => res.json(err))
})

// Middleware to verify token
const verifyToken = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.json({error: "No token provided."});
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.json({error: "Failed to authenticate token."});
        }
        req.user = decoded;
        next();
    });
};

// logged User
router.get("/loggeduser", verifyToken, (req, res) => {
    UserModel.findOne({username: req.user.username})
        .then((user) => {
            res.json({user});
        })
        .catch((err) => res.json(err));
})

module.exports = router;