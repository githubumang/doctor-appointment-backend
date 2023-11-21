var express = require("express")
var router = express.Router();
var Fakerator = require("fakerator");
var fakerator = Fakerator("de-DE");



const doctors = []
const speciality = ["Dentist", "Gynecologist", "Dietitian"]

for(let i = 0; i<100; i++){
    const storyCount = fakerator.random.number(0, 20);
    const storiesTemp = [];
    for(let j = 0; j<storyCount; j++){
        const temStory = fakerator.lorem.sentence();
        storiesTemp.push(temStory);
    }
    const tem={
        id:i,
        name: fakerator.names.firstName()+" "+fakerator.names.lastName(),
        speciality: fakerator.random.arrayElement(speciality),
        experience: fakerator.random.number(1, 30),
        address: fakerator.address.streetName(),
        hospital: fakerator.company.name(),
        fees: 10*fakerator.random.number(10, 50),
        rating: fakerator.random.number(80, 100),
        stories: storiesTemp,
        isAppointment: false
    }
    doctors.push(tem);
}

router.get("/", function(req, res, next){
    res.send(doctors);
});
module.exports=router;