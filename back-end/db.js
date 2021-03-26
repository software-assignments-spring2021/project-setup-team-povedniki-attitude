const mongoose = require('mongoose');


const IngredientSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ingredients: [String]
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    ingredients: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient'
    }
});

mongoose.model('Ingredient', IngredientSchema);
mongoose.model('User', UserSchema);

mongoose.connect('mongodb://localhost/bottomsup');