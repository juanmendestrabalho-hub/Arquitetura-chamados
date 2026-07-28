function login(){


let user =
document.getElementById("username").value;


let pass =
document.getElementById("password").value;



let db=getDB();



let account=db.users.find(
u =>
u.username===user &&
u.password===pass
);



if(account){


localStorage.setItem(
"session",
JSON.stringify(account)
);



window.location.href="dashboard.html";



}else{


document.getElementById("error").innerHTML=
"Usuário ou senha inválidos";


}


}



function logout(){


localStorage.removeItem("session");


window.location.href="index.html";


}



function checkAuth(){


let session=
localStorage.getItem("session");



if(!session){

window.location.href="index.html";

}



}



if(location.pathname.includes("dashboard")){


checkAuth();


let user =
JSON.parse(
localStorage.getItem("session")
);


let element =
document.getElementById("user");


if(element){

element.innerHTML =
`${user.username} (${user.role})`;

}


}
