const expres = require('express');

const app= expres();

app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
    let today =new Date();
    let numberOfDayInTheWeek = today.getDay();
    let nameOfDay = "";

    switch (numberOfDayInTheWeek) {

        case 0:
            nameOfDay = "Sunday"
            break;
        case 1:
            nameOfDay = "Monday"
            break;
        case 2:
            nameOfDay = "Tuesday"
            break;
        case 3:
            nameOfDay = "Wednesday"
            break;
        case 4:
            nameOfDay = "Thursday"
            break;

        case 5:
            nameOfDay = "Friday"
            break;

        case 6:
            nameOfDay = "Saturday"
            break;     

        default:
            console.log("Error: current day is egual to "+ numberOfDayInTheWeek);
            nameOfDay="day";
          break;
      }

    
    res.render('list', { kindOfDay: nameOfDay});
    // <!-- <%= kindOfDay %> -->

});

app.listen(3000, function(){
    console.log('sever started on port 3000');
})