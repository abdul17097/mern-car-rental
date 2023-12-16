const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuL6TBF6f4OmR3C6yj7pffvMkM13n9j6Prpg&usqp=CAU"
    }
},{
    timestamps: true
}
)

userSchema.pre("save", async function (next){
    if(!this.isModified('password')){
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);

    next();
})

// userSchema.method.matchUserPassword = async function (enteredPassword){
//     return await bcrypt.compare(enteredPassword , this.password);
// }
const User = mongoose.model("users", userSchema);

module.exports = User;