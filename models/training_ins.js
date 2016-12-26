var mongoose = require('mongoose');
var Training_int_RegisterSchema = mongoose.Schema({


name_of_organization  	:{ type: String, required: true },
email                 	:{ type: String, required: true },
address1              	:{ type: String },             
address2				:{ type: String, required: true },
city                   	:{ type: String, required: true },
state                   :{ type: String, required: true },
pin_code                :{ type: Number, required: true },
country                 :{ type: String, required: true },
date_of_establishment   :{ type: Date, required: true },
license_number          :{ type: String, required: true },

PAN_Number              :{ type: String, required: true },
service_tax_number      :{ type: String},
website                 :{ type: String, required: true },
contact_number          :{ type: Number, required: true }

});
module.exports = mongoose.model('Training_int_Register', Training_int_RegisterSchema);