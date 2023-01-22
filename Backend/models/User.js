// user.js
const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
    adult: Boolean,
    backdrop_path: String,
    id: Number,
    title: String,
    original_language: String,
    original_title: String,
    overview: String,
    poster_path: String,
    media_type: String,
    genre_ids: [Number],
    popularity: Number,
    release_date: String,
    video: Boolean,
    vote_average: Number,
    vote_count: Number
});
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    watchlist: {type: [MovieSchema], default: []}
});
module.exports = mongoose.model('User', UserSchema);
