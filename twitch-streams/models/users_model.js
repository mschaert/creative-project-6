var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var TwitchSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    streams: Array,
    hashed_password: String
});
mongoose.model('TwitchUser', TwitchSchema);
