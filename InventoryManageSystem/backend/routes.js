const express = require('express')

const object_id = require('mongoose').Types.ObjectId

const router = express.Router()
const UserInfo = require('./Model/userinfo')
const AllempInfo = require('./Model/eachemployee')
const AllleaveForm = require('./Model/Leaveform')
const UserLoginTime = require('./Model/officeLogindetails')
const UserSalaryDetails = require('./Model/salarysheet')


const jwt = require('jsonwebtoken')
const secreat_key = "thisismysecreatkeyofofficeemployee"




// recording the office data using post method
router.post('/officeemp', async (req, res) => {
    try {
        myuser = new UserInfo({


            empid: req.body.empid,
            email: req.body.email,
            name: req.body.name,
            password: req.body.password,
            profession: req.body.profession,
            worktime:req.body.worktime,
            PPURL:req.body.PPURL
         

        })
    } catch (error) {
        console.log(error)
    }


    // const token = await myuser.generateToken();
    // console.log(token)



    myuser.save((err, doc) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    });
    // jwt creation ... 










})
// getting the all recorded officedata from database
router.get('/officeemp', (req, res) => {

    UserInfo.find((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc)
        }
    }
    )
})

// getting single userdata
// router.get('/:id', (req, res) => {
//     if (object_id.isValid(req.params.id)) {
//         UserInfo.findById(req.params.id, (err, doc) => {
//             if (err) {
//                 res.send(err)

//             }
//             else {
//                 res.send(doc)
//             }
//         })

//     }
//     else {
//         res.send('invalid id')

//     }
// })
// deleting the userdata using delete method
router.delete('/officeemp/:id', (req, res) => {
    if (object_id.isValid(req.params.id)) {
        UserInfo.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                res.send(err)

            }
            else {
                res.send(doc)
            }
        })

    }
    else {
        res.send('invalid id')

    }
})


router.put('/officeemp/:id', (req, res) => {
    if (object_id.isValid(req.params.id)) {

        let user = {
            empid: req.body.empid,
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,


        }


        UserInfo.findByIdAndUpdate(req.params.id, { $set: user }, { new: true }, (err, doc) => {
            if (err) {
                res.send(err)

            }
            else {
                res.send(doc)
            }
        })

    }
    else {
        res.send('invalid id')

    }
})


// recording the office data using post method
router.post('/', (req, res) => {
    try {
        Myemp = new AllempInfo({
            fullname: req.body.fullname,
            phoneno: req.body.phoneno,
            address: req.body.address,
            guardno: req.body.guardno,
            email: req.body.email,
            panno: req.body.panno,
            workingshift:req.body.workingshift,
            bankname: req.body.bankname,
            accountno: req.body.accountno,
            salary: req.body.salary,
            joindate: req.body.joindate,
            expirydate: req.body.expirydate,
            profession: req.body.profession,
            pp_url: req.body.pp_url,
            workingdays:req.body.workingdays,
            Finalpay:req.body.Finalpay



        })
    } catch (error) {
        console.log(error)
    }
    Myemp.save((err, doc) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
})

router.get('/', (req, res) => {

    AllempInfo.find((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc)
        }
    }
    )
})


router.delete('/:id', (req, res) => {
    if (object_id.isValid(req.params.id)) {
        AllempInfo.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                res.send(err)

            }
            else {
                res.send(doc)
            }
        })

    }
    else {
        res.send('invalid id')

    }
})

// LEAVING FORM REQUEST AND RESPONSE
router.post('/leaveform', (req, res) => {
    try {
        Myleave = new AllleaveForm({
            name:req.body.name,
            profession:req.body.profession,
            phone:req.body.phone,

            breakperiod: req.body.BreakPeriod,
            daterequested:req.body.DateRequested,

            leavestart: req.body.LeaveStart,
            leaveend: req.body.LeaveEnd




        })
    } catch (error) {
        console.log(error)
    }
    Myleave.save((err, doc) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
})

router.get('/leaveform', (req, res) => {
    AllleaveForm.find((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc)
        }
    }
    )
})

router.delete('/leaveform/:id', (req, res) => {
    if (object_id.isValid(req.params.id)) {
        AllleaveForm.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                res.send(err)

            }
            else {
                res.send(doc)
            }
        })

    }
    else {
        res.send('invalid id')

    }
})


// router.post('/cvfileurl', (req, res) => {
//     try {
//         Mycvfiles = new Cvfiles({
//             name:req.body.name,
          




//         })
//     } catch (error) {
//         console.log(error)
//     }
//     Myleave.save((err, doc) => {
//         if (err) {
//             console.log(err)
//         }
//         else {
//             res.send(doc)
//         }
//     })
// })

// Employee office time login and logout .................................................................................

router.post('/userloginTime', (req, res) => {
    try {
        Mylogintime = new UserLoginTime({
            name:req.body.emp_name,
            date:req.body.login_date,
            login_time:req.body.login_time,
            logout_time:req.body.logout_time,
            day_attendance:req.body.day_attendance

        })
    } catch (error) {
        console.log(error)
    }
    Mylogintime.save((err, doc) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
})


router.get('/userloginTime', (req, res) => {
    UserLoginTime.find((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc)
        }
    }
    )
})



router.post('/userSalarydetails', (req, res) => {
    try {
      UserSalary= new UserSalaryDetails({
            name:req.body.name,
            workDays:req.body.workDays,
          
           
        })
    } catch (error) {
        console.log(error)
    }
    UserSalary.save((err, doc) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
})


router.get('/userSalarydetails', (req, res) => {
    UserSalaryDetails.find((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc)
        }
    }
    )
})



router.put('/userSalarydetails/:id', (req, res) => {
    if (object_id.isValid(req.params.id)) {

        let usersal = {
            name:req.body.name,
            workDays:req.body.workDays,
           


        }


        UserSalaryDetails.findByIdAndUpdate(req.params.id, { $set: usersal }, { new: true }, (err, doc) => {
            if (err) {
                res.send(err)

            }
            else {
                res.send(doc)
            }
        })

    }
    else {
        res.send('invalid id')

    }
})


router.delete('/userSalarydetails/:id', (req, res) => {
    if (object_id.isValid(req.params.id)) {
        UserSalaryDetails.findByIdAndRemove(req.params.id, (err, doc) => {
            if (err) {
                res.send(err)

            }
            else {
                res.send(doc)
            }
        })

    }
    else {
        res.send('invalid id')

    }
})



module.exports = router

