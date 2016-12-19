var mongoose = require('mongoose');
var schoolRegisterSchema = mongoose.Schema({


name_of_school          :{ type: String, required: true },
affiliation_board       : { type: String, required: true },
affiliation_code        :{ type: Number, required: true },
address1                : { type: String, required: true },
address2                :{ type: String },
city                    :{ type: String, required: true },
state                   : { type: String, required: true },
pin code                :{ type: Number, required: true },
country                 : { type: String, required: true },
year_of_establishment   :{ type: Number, required: true },
contact_number          :{ type: Number, required: true },
email_id                :{ type: String, required: true },
website                 :{ type: String, required: true },
branch_name             :{ type: String},
branch_address          :{ type: String},
school_strength         :{ type: String, required: true },
type_of_school          :{ type: String, required: true },
teaching_medium         :{ type: String, required: true },


});
module.exports = mongoose.model('schoolRegister', schoolRegisterSchema);