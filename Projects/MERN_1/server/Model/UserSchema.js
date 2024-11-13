const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
    username: String,
    fname: String,
    Password: String,
    dob: Date,
    number: Number,
    address: String,
    city: String,
    role: String,
    photo: String
})

// generate token
UserSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({
            username: this.username,
            fname: this.fname,
            dob: this.dob,
            number: this.number,
            address: this.address,
            city: this.city,
            role: this.role,
            photo: this.photo
        },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            });
        return token;
    } catch (error) {
        console.log(error)
    }
}

const UserModel = mongoose.model("users", UserSchema)
module.exports = UserModel