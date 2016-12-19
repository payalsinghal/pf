var mongoose = require('mongoose');
var addcertificateSchema = mongoose.Schema({

Name_of_Certificate            :{ type: String, required: true },
Name_of_person                 :{ type: String, required: true },
D.O.B                             :{ type: Date, required: true },
Gender                            :{ type: String, required: true },
Nationality                       :{ type: String, required: true },
Father_name                     :{ type: String, required: true },
Father_email                   :{ type: String },
Mother_name                     :{ type: String, required: true },
Mother_email                  :{ type: String },
Husband/Spouse                    :[{ 
                                    name     :{ type: String, required: true },
                                    email    :{ type: String, required: true },
                                   }],          
Contact_Number                    :{      
           Primary                :{ type: Number, required: true },
           Secondary              :{ type: Number },
           Other                  :{ type: String }
         },
email                          :{ 
                              Primary         :{ type: String, required: true },
                              Alternate            :{ type: String, required: true },
                                },
Permanent Address                 :{ 
              Address 1           :{ type: String, required: true },
              Address 2           :{ type: String },
              City                :{ type: String, required: true },
              State               :{ type: String, required: true },
              Pin code            :{ type: Number, required: true },
             Country              :{ type: String, required: true },
                  },
Current Address                   :{ 
            Address 1             :{ type: String },
           Address 2              :{ type: String },
           City                   :{ type: String },
          State                   :{ type: String },
          Pin code                :{ type: Number },
         Country                  :{ type: String},
             },
Previous Address                  :{ 
            Address 1             :{ type: String },
           Address 2              :{ type: String},
           City                   :{ type: String},
          State                   :{ type: String},
          Pin code                :{ type: Number},
         Country                  :{ type: String},
       },
Government Id                     :{ type: String, required: true },
Aadhar Card No.                   :{ type: String, required: true },

Name of Course                    :{ type: String, required: true },
Version                           :{ type: Number, required: true },
Status                             :{ type: String },

		module.exports = mongoose.model('addcertificate',addcertificateSchema);