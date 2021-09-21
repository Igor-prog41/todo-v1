const express = require('express');

const app= express();

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
};

let itemsForTodoList=['Buy food','Cook food','Eat food'];

app.get('/',(req,res)=>{

    const today =new Date();

    const  dayToday = today.toLocaleDateString('en-US',options);
   
    res.render('list', { kindOfDay: dayToday,
                            todoListForHtml: itemsForTodoList});
    // <!-- <%= kindOfDay %> -->

});

app.post('/',(req,res)=>{
    // console.log(req.body.newItem);

    itemsForTodoList.push(req.body.newItem);
 
    res.redirect('/');
})

app.listen(3000, function(){
    console.log('sever started on port 3000');
})