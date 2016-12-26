var express = require('express');
var app = express();
var mongoose = require('mongoose');
var Register = require('../models/res');
var Login = require('../models/login');
var TrainingRegister = require('../models/training_company');
var Training_int_Register = require('../models/training_ins');
var macaddress = require('macaddress');
var email = require('emailjs');
var router = express.Router();
var geoip = require('geoip-lite');
//var passport = require('passport')
//var LocalStrategy = require('passport-local').Strategy;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var http = require('http');
var urlencode = require('urlencode');
// var sha512 = require('js-sha512');


var Hashids = require('hashids')
var hashSalt = new Hashids('PaperFlow forget password');


var mailSender = email.server.connect({
    user: "testuserdmt@gmail.com",
    password: "Testuserdmt_1234",
    host: "smtp.gmail.com",
    ssl: true
		});






router.route('/register')
    .post(function(req, res) {


        //first otp
  // function randomString(length, chars) {
  //   var result = '';
  //   for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  //   return result;
  //                                       }
  //       var tempCode1  = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
  //       console.log(tempCode1)

        
        // token1=sha512(tempCode1);
        // console.log ("token1",token1)



// //second otp
//         function randomValueHex (len) {
//         return crypto.randomBytes(Math.ceil(len/2))
//         .toString('hex') // convert to hexadecimal format
//         .slice(0,len).toUpperCase();   // return required number of characters
//         }
//         var tempCode2 = randomValueHex(2)+randomValueHex(2)+randomValueHex(4);
//         console.log(tempCode2);
//         sha512(tempCode2);
//         token2=sha512(tempCode2);
//         console.log ("token2",token2);
        //token=token1+token2;   //email+sms
        //console.log ("token",token1);

      

        var register = new Register();
        register.type_of_organization = req.body.type_of_organization;
        register.email = req.body.email ;
        register.contact_number  = parseInt(req.body.contact_number) ;
        register.password = req.body.password;
        register.confirm_password  = req.body.confirm_password ;
        register.IP_address  = req.connection.remoteAddress;
         register.last_IP = req.connection.remoteAddress;
       // register.verifyCode = tempCode1;
        //register.verifyCode_mobile  = tempCode2;

          //  macaddress.one(function (err, mac) {
          // console.log("Mac address for this host: %s", mac);
          //   register.MAC_address=mac;
          //   register.last_MAC =mac 
          //           });


            // var geo = geoip.lookup(register.IP_address );
            // console.log("geo address for this host: %s",geo);
            //  register.locations=geo;

     	      Login.findOne({ email: req.body.email }, function(err, data) {
                if (data == null || data == undefined) {

                Register.findOne({ email: req.body.email }, function(err, data) {
                    if (data == null || data == undefined) {





        //first otp
  function randomString(length, chars) {
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
                                        }
        var tempCode1  = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
        console.log(tempCode1)
            register.verifyCode = tempCode1;



        macaddress.one(function (err, mac) {
          console.log("Mac address for this host: %s", mac);
            register.MAC_address=mac;
            register.last_MAC =mac 
                    });




            var geo = geoip.lookup(register.IP_address );
            console.log("geo address for this host: %s",geo);
             register.locations=geo;

                        register.save(function(err) {
                            if (err) {
                                console.log(err)
                                res.json({ success: false });
                                res.end();
                                    } 
                            else {
                                         //sms
                                            
                                        //     console.log('hello');
                                        //     var msg=urlencode('One Time OTP '+tempCode1); 
                                        //      console.log('hello')
                                        //     var number=917428848052;
                                        //     var username='query@zenways.io';
                                        //     var hash='0al1Wzv861Y-2lzCZwzQ95eJwD3Zk616j4wXrgTaS2'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
                                        //     var sender='txtlcl';
                                        //     var data='username='+username+'&hash='+hash+'&sender='+sender+'&numbers='+number+'&message='+msg
                                        //     var options = {
                                        //                     host: 'api.textlocal.in',
                                        //                     path: '/send?'+data
                                        //                 };

                                        //     callback = function(response) {
                                        //      var str = '';
                                        //      //another chunk of data has been recieved, so append it to `str`
                                        //      response.on('data', function (chunk) {
                                        //      str += chunk;
                                        //      });
                                        //     //the whole response has been recieved, so we just print it out here
                                        //     response.on('end', function () {
                                        //     console.log(str);
                                        // });
                                        // }
                                        // //console.log('hello js'))

                                        // http.request(options, callback).end();
                                            


                                            // email

                                //      var message = {
                                //     text: "",
                                //     from: "PaperFlow <testuserdmt@gmail.com>",
                                //     to: req.body.email,
                                //     subject: "PaperFlow Account Verification",
                                //     attachment: [{
                                //         data: "<html>Hi,<br><h2>Thank you for registering with PaperFlow.</h2><br>" +
                                //             "Please use the verificatation code below in order to complete your registration.<br>" +
                                //             "Code: <strong> " + tempCode1 +
                                //             "</strong></html>",
                                //         alternative: true
                                //     }]
                                // };
                                // mailSender.send(message, function(err, data) {
                                //     // console.log(err)
                                //     res.json({ success: true });
                                //     res.end();
                                // })

                                   

                                        
                            }
                        })

                    }

                    else {

                        Register.remove({ email: req.body.email }, function(err) {
                            if (!err) {
                                register.save(function(err) {
                                    if (err) {
                                        res.json({ success: false });
                                        res.end();
                                    } 
                                    else {
                                        // var message = {
                                        //     text: "",
                                        //     from: "PaperFlow <testuserdmt@gmail.com>",
                                        //     to: req.body.email,
                                        //     subject: "PaperFlow Account Verification",
                                        //     attachment: [{
                                        //         data: "<html>Hi,<br><h2>Thank you for registering with PaperFlow.</h2><br>" +
                                        //             "Please use the verificatation code below in order to complete your registration.<br>" +
                                        //             "Code: <strong> " + tempCode1 +
                                        //             "</strong></html>",
                                        //         alternative: true
                                        //     }]
                                        // };
                                        // mailSender.send(message, function(err, data) {
                                        //     res.json({ success: true });
                                        //     res.end();

                                        // })
                                    
                                            //sms
                                        //     var http = require('http');
                                        //     var urlencode = require('urlencode');
                                        //     var msg=urlencode(tempCode1); 
                                        //     var number='Mobile number';
                                        //     var username='< query@zenways.io>';
                                        //     var hash='<0al1Wzv861Y-2lzCZwzQ95eJwD3Zk616j4wXrgTaS2>'; // The hash key could be found under Help->All Documentation->Your hash key. Alternatively you can use your Textlocal password in plain text.
                                        //     var sender='txtlcl';
                                        //     var data='username='+username+'&hash='+hash+'&sender='+sender+'&numbers='+number+'&message='+msg
                                        //     var options = {
                                        //                     host: 'api.textlocal.in',
                                        //                     path: '/send?'+data
                                        //                 };

                                        //     callback = function(response) {
                                        //      var str = '';
                                        //      //another chunk of data has been recieved, so append it to `str`
                                        //      response.on('data', function (chunk) {
                                        //      str += chunk;
                                        //      });
                                        //     //the whole response has been recieved, so we just print it out here
                                        //     response.on('end', function () {
                                        //     console.log(str);
                                        // });
                                        // }
                                        // //console.log('hello js'))

                                        // http.request(options, callback).end();

                                        // //url encode instalation need to use $ npm install urlencode
                                    }    
                                })
                            } 
                            else {
                                res.json({ success: false, message: "you cannot register!, already exist" });
                                res.end();
                            }
                        })

                    }

                })
            } 
            else {
                res.json({ success: false, message: "you cannot register!, already exist" });
                res.end();
                 }

        })



    })



// router.route('/verify')
//     .post(function(req, res) {
//         Register.findOne({ email: req.body.email }, function(err, data) {
//             if (!err) {
//                 verCode_email = data.verifyCode_email;
//                 //verCode_mobile = data.verifyCode_mobile;

//                 // if (verCode_email == req.body.verifyCode_email && verCode_mobile== req.body.verifyCode_mobile) {

//                     if (verCode_email == req.body.verifyCode ) {

//                     Login.findOne({ email: data.email }, function(err, logindata) {
//                         //if (logindata == null || logindata == undefined) {
//                             var newlogin = new Login();
                           
//                            	newlogin.email = data.email;
//                             newlogin.password = data.password;
//                             newlogin.active = true;
//                             newlogin.save(function(err) {
//                                 if (!err){ 
//                                     res.json({ success: true });
//                                     res.end();
//                                         } 
//                                 else {
//                                     console.log(err)
//                                     console.log("1")
//                                     res.json({ success: false });
//                                     res.end();
//                                      }
//                             });
//                         //} 
//                         // else {
//                         //     console.log(err)
//                         //     console.log("2")
//                         //     res.json({ success: false });
//                         //     res.end();
//                         // }
//                     });

//                 } 
//                 else {
//                     console.log(err)
//                     console.log("2")
//                     res.json({ success: false, message: "wrong verification code" });
//                     res.end();
//                 }

//             } 
//             else {
//                 console.log(err)
//                 console.log("3")
//                 res.json({ success: false, message: "Registeration not done!" });
//                 res.end();
//             }

//         })

//     })



// router.route('/login')
//     .post(function(req, res) {
//         Login.findOne({ email: req.body.email }, function(error, data) {
//             if (error) {
//                 res.status(500).send({ status: 500, message: 'internal error' });
//                 res.end();
//             } 
//             else {

//                 if (data && data.active == true) {
                  
//                     if (data.password == req.body.password) {


//                         //  var ipTemp = req.ip.split(":");
//                         // ipClient = ipTemp[3];
//                         // obj = { date: new Date(), ip: ipClient };
        
//                         // data.lastLogin.push(obj);

//                         // Profile.update({ email: req.body.email }, { $push: { lastLogin:obj } }).exec()
//                         // data.markModified('lastLogin');
//                         // data.save(function(numAffected) {});

//                         // stoken = {
//                         //     pmb_id: data.pmb_id,
//                         //     email: data.email,
//                         //     active: data.active
//                         // }







//                         var token = jwt.sign(data, 'superSecret', { expiresIn: '1d' });
                       
//                         Login.update({ email: req.body.email }, { $set: { token: token } }, function(err, loginuser) {
//                             if (err) {
//                                 res.json({ success: false });
//                                 res.end();
//                             } 
//                             else {

//                                 res.set({
//                                     'token': token
//                                 });

//                                 res.json({ success: true });
//                                 res.end();
//                             }
//                         })
//                     } 
//                     else {
//                         res.json({ success: false, message: "wrong password" });
//                         res.end();
//                     }
//                 } 
//                 else {
//                     res.json({ success: false, message: "User not found" });
//                     res.end();
//                 }
//             }
//         })
//     })








// router.route('/forgotPassword')
//     .post(function(req, res) {

//         Login.findOne({ email: req.body.email }, function(err, data) {
//             if (!err) {
//                 if (data != null || data != undefined) {
//                     var randomNum = Math.floor((Math.random() * 10000000) + 1000000);
//                     var newPassword = hashSalt.encode(randomNum);
//                     //console.log(newPassword)
//                     // var salt = bcrypt.genSaltSync(10);
//                     //  var hash = bcrypt.hashSync(newPassword, salt);
//                     //  data.password = hash;  
//                     data.password = newPassword;
//                     data.save(function(err) {
//                         if (!err) {

//                             var message = {
//                                 text: "",
//                                 from: "Paperflow <testuserdmt@gmail.com>",
//                                 to: req.body.email,
//                                 subject: "Paperflow reset password",
//                                 attachment: [{
//                                     data: "<html>Dear,<br><p style='width:600px;'>We have received your password reset request.</p>" +
//                                         "You can access your account by using the temporary password: <strong>" + newPassword + "</strong><br><p style='width:600px;'>Once you login you will have to change your password.</p></html>",
//                                     alternative: true
//                                 }]
//                             };
//                             mailSender.send(message, function(err, data) {
//                                 console.log(newPassword);
//                                 res.json({ 'success': true });
//                                 res.end();
//                             });
//                         } else {
//                             res.json({ success: false });
//                             res.end();
//                         }
//                     });
//                 } else {
//                     res.json({ success: false, message: "user not exist" });
//                     res.end();
//                 }
//             } else {
//                 res.json({ success: false, message: "user not exist" });
//                 res.end();
//             }
//         })
//     })


// router.route('/changePassword')
//     .post(function(req, res) {
//         token = req.headers.token;
//         if (token) {
//             jwt.verify(token, 'superSecret', function(err, decoded) {
//                 if (err) {
//                     console.log(err)
//                     return res.json({ success: false, message: 'Failed to authenticate token.' });
//                 } else {
//                     Login.findOne({ email: decoded.email }, function(err, userData) {
//                         if (!err) {
//                             if (userData !== null) {
                       
//                                 if (userData.password == req.body.currentPassword) {
                                
//                                     userData.password = req.body.newPassword;
//                                     userData.save(function(err) {
//                                         if (!err) {
//                                             res.json({ "success": true });
//                                             res.end();
//                                         } else {
//                                             res.json({ "success": false });
//                                             res.end();
//                                         }

//                                     });
//                                 } else {
//                                     res.json({ "success": false, message: "current password does not match" });
//                                     res.end();
//                                 }
//                             } else {
//                                 res.json({ "success": false, message: "user not found!" });
//                                 res.end();
//                             }
//                         } else {
//                             res.json({ "success": false, message: "user not found!" });
//                             res.end();
//                         }
//                     });

//                 }
//             })
//         } else {
//             res.json({ "success": false, message: "token not found!" });
//             res.end();
//         }


//     })



// router.route('/resendcode')
//     .post(function(req, res) {
//         var email = req.body.email;
//         Register.findOne({ email: email }, function(err, userData) {
//             if (!err) {
//                 if (userData !== null) {
//                     function randomString(length, chars) {
//                     var result = '';
//                     for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
//                     return result;
//                     }
//                         var tempCode1  = randomString(8, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
//                         console.log(tempCode1)
//                     Register.update({ email: email }, { $set: { verifyCode: tempCode1 } }, function(err, data) {
//                         if (err) {
//                             res.json({ success: false, message: "verify code not sent" });
//                             res.end();
//                         } else {
//                             res.json({ success: true, message: "verifycode sent success" });
//                             res.end();
//                         }
//                     })


//                 } else {
//                     res.json({ success: false, message: "user not found" });
//                     res.end();
//                 }
//             } else {
//                 res.json({ success: false, message: "user not found" });
//                 res.end();
//             }
//         })



// router.route('/register/training_company')
//     .post(function(req, res) {

//  Login.findOne({token:req.headers.token}, function(err, user) {
//            if (err){
//             console.log(err);
//              res.send(err);
//                     }
//       else if(user===null||undefined||""){
//            res.json("unauthroized");}

//       else{

// TrainingRegister.findOne({email_id:req.body.email_id},function(err,d)
//         {
//      if(!err)   
//           {
//             var trainingRegister = new TrainingRegister();  
//             trainingRegister.name_of_organization= req.body.name_of_organization;
//             trainingRegister.address1 = req.body.address1;
//             trainingRegister.address2 = req.body.address2;
//             trainingRegister.city  = req.body.city ;
//             trainingRegister.state = req.body.state;
//             trainingRegister.pin_code = req.body.pin_code;
//             trainingRegister.country = req.body.country;
//             trainingRegister.date_of_establishment = req.body.date_of_establishment;
//             trainingRegister.license_number = req.body.address2;
//             trainingRegister.CIN_Number = req.body.CIN_Number;
//             trainingRegister.PAN_Number = req.body.PAN_Number;
//             trainingRegister.service_tax_number = req.body.service_tax_number ;
//             trainingRegister.website = req.body.website;
// TrainingRegister.save(function(err) {
//         if (err)
//                 res.send(err);
        
//             else
//             res.send( { message: 'log'})
//     });


//             // Registration.update({email_id:req.body.email_id},{$push:{name :contact.name,phone:contact.phone,email:contact.email}},function(err,dd){
//             // if(err)
//             //     res.send(err);
//             // else
    
//             // res.send( { message: 'Add contact'})
            
//             //                     });
//           }
//     });
//     }
//  });

// });





// router.route('/register/training_ins')
//     .post(function(req, res) {
//          Login.findOne({token:req.headers.token}, function(err, user) {
//            if (err){
//             console.log(err);
//              res.send(err);
//                     }
//       else if(user===null||undefined||""){
//            res.json("unauthroized");}

//       else{

// Training_int_Register.findOne({email_id:req.body.email_id},function(err,d)
//         {
//      if(!err)   
//           {
//             Training_int_Register.update({email_id:req.body.email_id},{$push:{name_of_organization :req.body.name_of_organization,address1:req.body.address1,address2:req.body.address2,city:req.body.city,state :req.body.state ,pin_code:req.body.pin_code,pin_code:req.body.pin_code,country:req.body.country,date_of_establishment:req.body.date_of_establishment,license_number:req.body.license_number,PAN_Number:req.body.PAN_Number,service_tax_number:req.body.service_tax_number,website:req.body.website,contact_number:req.body.contact_number}},function(err,dd){
//             if(err)
//                 res.send(err);
//             else
    
//             res.send( { message: 'Add contact'})
            
//                                 });
//           }
//     });
//     }
//  });

// });
    module.exports = router;
