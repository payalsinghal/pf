var mongoose = require('mongoose');
var certificateSchema = mongoose.Schema({


Course Name      :{ type: String, required: true },
Duration         :{ type: Number, required: true },
Type of Course   :{ type: String, required: true },
Course Content   :{ type: String, required: true },


	module.exports = mongoose.model('certificate',certificateSchema);