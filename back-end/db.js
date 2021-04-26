const mongoose = require('mongoose');


const FavoritesSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    favorites: [String]
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
    favorites: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Favorite'
    }
});

mongoose.model('Favorite', FavoritesSchema);
mongoose.model('User', UserSchema);

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.d6uyu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);