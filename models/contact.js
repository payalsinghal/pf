
var mongoose = require('mongoose');
var contactRegisterSchema = mongoose.Schema({

Name                            :{ type: String, required: true },
DOB                             :{ type: Date, required: true },
Gender                          :{ type: String, required: true },
Nationality                     :{ type: String, required: true },
Father_name                     :{ type: String, required: true },
Father_email                    :{ type: String },
Mother_name                     :{ type: String, required: true },
Mother_email                    :{ type: String },
Spouse                          :[{ 
                                    name     :{ type: String, required: true },
                                    email    :{ type: String, required: true }
                                   }],          
Contact_Number                  :{      
           Primary              :{ type: Number, required: true },
           Secondary            :{ type: Number },
           Other                :{ type: String }
         
email                          :{ 
                              Primary          :{ type: String, required: true },
                              Alternate        :{ type: String, required: true }
                                },
Permanent_Address                :{ 
              Address1           :{ type: String, required: true },
              Address2           :{ type: String },
              City               :{ type: String, required: true },
              State              :{ type: String, required: true },
              Pin_code           :{ type: Number, required: true },
             Country             :{ type: String, required: true }
                  },
Current_Address                  :{ 
            Address1             :{ type: String },
           Address2              :{ type: String },
           City                  :{ type: String },
          State                  :{ type: String },
          Pin_code               :{ type: Number },
         Country                 :{ type: String},
             },
Previous_Address                 :{ 
            Address1             :{ type: String },
           Address2              :{ type: String},
           City                  :{ type: String},
          State                  :{ type: String},
          Pin_code               :{ type: Number},
         Country                 :{ type: String}
       },
Government_Id                    :{ type: String, required: true },
Aadhar_Card                      :{ type: String, required: true }



});



module.exports = mongoose.model('contactRegister', contactRegisterSchema);