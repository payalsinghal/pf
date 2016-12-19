var mongoose = require('mongoose');
var courseSchema = mongoose.Schema({


Course_Name               { type: String, required: true },
Status                     { type: String, required: true },
Field                       { type: String, required: true },
Course_Module/Content        { type: Number, required: true },
Course_Duration_Weeks          { type: Number, required: true },
Course_Duration_Hours        { type: String, required: true },
Industry Connect    :{
	                   Company_name: { type: String, required: true },
	                   License_Number: { type: String, required: true },
	                   MOU/MOA: { type: String, required: true },

					}       

});
module.exports = mongoose.model('course',courseSchema);