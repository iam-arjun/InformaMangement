const express = require('express')

const object_id = require('mongoose').Types.ObjectId

const router = express.Router()
const UserInfo = require('./Model/userinfo')
const AllempInfo = require('./Model/eachemployee')
const AllleaveForm = require('./Model/Leaveform')
const ChatUserForm  = require('./Model/chatLogin')
const Cvfiles = require('./Model/fileurl')
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
            worktime:req.body.worktime
         

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
            pp_url: req.body.pp_url



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



// recording the office data using post method
router.post('/chatLogin', (req, res) => {
    try {
        chatuser = new ChatUserForm({
            email:req.body.email,
            password:req.body.password
           



        })
    } catch (error) {
        console.log(error)
    }
    chatuser.save((err, doc) => {
        if (err) {
            console.log(err)
        }
        else {
            res.send(doc)
        }
    })
})
router.get('/chatLogin', (req, res) => {
    ChatUserForm.find((err, doc) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send(doc)
        }
    }
    )
})


module.exports = router

