const DB = {


users:[

{
username:"admin",
password:"1234",
role:"Administrador"
},


{
username:"tecnico",
password:"1234",
role:"Técnico"
},


{
username:"usuario",
password:"1234",
role:"Usuário"
}


],


tickets:[],


assets:[],


articles:[]


};



function initDB(){


if(!localStorage.getItem("helpdesk")){


localStorage.setItem(
"helpdesk",
JSON.stringify(DB)
);


}


}



function getDB(){

return JSON.parse(
localStorage.getItem("helpdesk")
);


}



function saveDB(data){


localStorage.setItem(
"helpdesk",
JSON.stringify(data)
);


}



initDB();
