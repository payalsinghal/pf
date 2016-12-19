var mongoose = require('mongoose');
var RegisterSchema = mongoose.Schema({

type_of_organization  : { type: String, required: true },
email              	  : { type: String, required: true },
contact_number        : { type: Number, required: true },
password              : { type: String, required: true },
confirm_password      : { type: String, required: true },
IP_address            : { type: String },
MAC_address           : { type:String },
last_IP               : [],
last_MAC              : [],
locations             :[],
// authorization_status  : { type: String, required: true },
verifyCode           : { type: String, required: true }
// verifyCode_mobile            : { type: String, required: true },

})

module.exports = mongoose.model('Register', RegisterSchema);