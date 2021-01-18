const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phone_number: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    address: {
        type: String,
    },
    zip_code: {
        type: String,
    },
    gender: {
        type: String,
    },
    avatar: {
        type: String,
    },
    archived: {
        type: Boolean,
        default: false,
    },
});



const User = mongoose.model('user', UserSchema);

module.exports = User;

/*const UserSchema = new Schema({
    movies: [{
        type: Schema.Types.ObjectId,
        ref: 'movie'
    }]
});

UserSchema.virtual('countMovies').get(() => {
    return this.movies.length;
});

UserSchema.pre('remove', (next) => {
    Movie.remove({_id: {$in : this.movies }}).then(() => {
        next();
    });
});*/


