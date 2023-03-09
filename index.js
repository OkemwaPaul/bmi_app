const express = require('express');
const app =express();
const port =3002;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', 'views');
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.get('/', function (request, response) {
    response.render('calculate');
})

app.post('/calculate', (request, response)=> {
   const height=Number(request.body.height);
   const weight=Number(request.body.weight);
   const bmi=(weight/ (height*2))
   let status; 
   if (bmi<=18.5){
    status = "You are underweight";
   } else if (bmi=>18.5<25)
   {
status= "You are healthy";
   } else if (bmi=>25<30) {
    status = "You are overweight";
   }
   else {
status="You are Obese";
   }
   response.render("result", {bmi, status});
});

app.listen(port);
console.log('Node server started on port 3002');