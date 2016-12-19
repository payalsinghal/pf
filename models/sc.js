var mongoose = require('mongoose');
var RegisterSchema = mongoose.Schema({



type_of_organization  :   { type: String, required: true },
email              :   { type: String, required: true },
contact_number        :   { type: Number, required: true },
password              :   { type: String, required: true },
confirm_password      :  { type: String, required: true },
IP_address             :  { type: Number, required: true },
MAC_address             : { type: Number, required: true },
last_IP                 : { type: Number, required: true },
Last_MAC                : { type: Number, required: true },
Authorization_status   :   { type: String, required: true },
email_OTP              : { type: Number, required: true },
mobile_OTP              : { type: Number, required: true },
})

module.exports = mongoose.model('Register', RegisterSchema);





var mongoose = require('mongoose');
var loginSchema = mongoose.Schema({


    email                   :       { type: String, required: true },
    password                :       { type: String, required: true },
    active                  :       { type: Boolean, required: true}

    

})
  module.exports = mongoose.model('login', loginSchema);





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




var mongoose = require('mongoose');
var trainingRegisterSchema = mongoose.Schema({



name_of_organization  :{ type: String, required: true },
address1              :{ type: String, required: true },             
address2        :{ type: String},
city                   :{ type: String, required: true },
state                   :{ type: String, required: true },
pin code                 :{ type: Number, required: true },
country                  :{ type: String, required: true },
date_of_establishment     :{ type: Date, required: true },
license_number            :{ type: String, required: true },
CIN_Number                :{ type: String, required: true },
contact_number             :{ type: Number, required: true },
email                        :{ type: String, required: true },
PAN_Number                 :{ type: String, required: true },
service_tax_number          :{ type: String},
website                    :{ type: String, required: true },


});
module.exports = mongoose.model('trainingRegister', trainingRegisterSchema);




var mongoose = require('mongoose');
var training_int_RegisterSchema = mongoose.Schema({


name_of_organization  :{ type: String, required: true },
email                  :{ type: String, required: true },
address1              :{ type: String },             
address2        :{ type: String, required: true },
city                   :{ type: String, required: true },
state                   :{ type: String, required: true },
pin code                 :{ type: Number, required: true },
country                  :{ type: String, required: true },
date_of_establishment     :{ type: Date, required: true },
license_number            :{ type: String, required: true },
email                        :{ type: String, required: true },
PAN_Number                 :{ type: String, required: true },
service_tax_number          :{ type: String},
website                    :{ type: String, required: true },
contact_number             :{ type: Number, required: true }

});
module.exports = mongoose.model('training_int_Register', training_int_RegisterSchema);










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






var mongoose = require('mongoose');
var certificateSchema = mongoose.Schema({


Course Name      :{ type: String, required: true },
Duration         :{ type: Number, required: true },
Type of Course   :{ type: String, required: true },
Course Content   :{ type: String, required: true },


  module.exports = mongoose.model('certificate',certificateSchema);









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






var mongoose = require('mongoose');
var contactRegisterSchema = mongoose.Schema({

name                            :{ type: String, required: true },
D.O.B                             :{ type: Date, required: true },
Gender                            :{ type: String, required: true },
Nationality                       :{ type: String, required: true },
Father_name                     :{ type: String, required: true },
Father_email                :{ type: String },
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
                              Primary                 :{ type: String, required: true },
                              Alternate               :{ type: String, required: true },
                                },
Permanent_Address                 :{ 
              Address 1           :{ type: String, required: true },
              Address 2           :{ type: String },
              City                :{ type: String, required: true },
              State               :{ type: String, required: true },
              Pin code            :{ type: Number, required: true },
             Country              :{ type: String, required: true },
                  },
Current_Address                   :{ 
            Address 1             :{ type: String },
           Address 2              :{ type: String },
           City                   :{ type: String },
          State                   :{ type: String },
          Pin code                :{ type: Number },
         Country                  :{ type: String},
             },
Previous_Address                  :{ 
            Address 1             :{ type: String },
           Address 2              :{ type: String},
           City                   :{ type: String},
          State                   :{ type: String},
          Pin code                :{ type: Number},
         Country                  :{ type: String},
       },
Government_Id                     :{ type: String, required: true },
Aadhar_Card                   :{ type: String, required: true },



});
module.exports = mongoose.model('contactRegister', contactRegisterSchema);



    











