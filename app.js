const express = require("express");
const date = require(__dirname+"/date.js");
const app= express();

app.set("view engine", "ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.static("public"));


const itemsForTodoList=["Buy food","Cook food","Eat food"];
const itemsForWorkTodoList=["Buy pen","Write letter","Send letter"];

app.get("/",(req,res)=>{

    const dayToday=date.getDate();
   
    res.render("list", { listTitle: dayToday,
                         todoListForHtml: itemsForTodoList});
});

app.get("/work",(req,res)=>{
    res.render("list", { listTitle:"Work List for "+date.getDay(),
                         todoListForHtml : itemsForWorkTodoList })
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.post('/',(req,res)=>{


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