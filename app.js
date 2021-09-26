const express = require("express");

const app= express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));

const options = {
    weekday: "long",
    day: "numeric",
    month: "long"
};

let itemsForTodoList=["Buy food","Cook food","Eat food"];
let itemsForWorkTodoList=["Buy pen","Write letter","Send letter"];

app.get("/",(req,res)=>{

    const today =new Date();

    const  dayToday = today.toLocaleDateString("en-US",options);
   
    res.render("list", { listTitle: dayToday,
                            todoListForHtml: itemsForTodoList});
    // <!-- <%= kindOfDay %> -->

});

app.get("/work",(req,res)=>{
    res.render("list", { listTitle:"Work List",
                         todoListForHtml : itemsForWorkTodoList })
})

app.get("/about",(req,res)=>{
    res.render("about")
})
// listTitle:"Work List"  newListItems


app.post('/',(req,res)=>{
    //  console.log(req.body);

    if (req.body.list==="Work"){
        itemsForWorkTodoList.push(req.body.newItem);
        res.redirect("/work");
    }
    else{
        itemsForTodoList.push(req.body.newItem);
        res.redirect("/");
    }

})

app.listen(3000, function(){
    console.log("sever started on port 3000");
})