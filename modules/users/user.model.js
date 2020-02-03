const mongoose = require('../../config/database');
const bcryptjs = require('bcryptjs');
const validator = require('validator');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 40,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: [validator.isEmail, 'Invalid E-mail']

    },
    phone: {
        type: String,
        minlength: [11, 'Deve Ter 11 caracteres '],
        maxlength: [11, 'Deve Ter 11 caracteres'],
    },
    photo: {
        data: Buffer,
        contentType: String,
    },
    password: {
        type: String,
        required: true,
        select: false,

    },
    created_At: {
        type: Date,
        default: Date.now,
        select: false
    }
});
UserSchema.pre('save', async function (next) {
    const hash = await bcryptjs.hash(this.password,10);
    this.password = hash;
    next();
});
const User = mongoose.model('User', UserSchema);

module.exports = User;