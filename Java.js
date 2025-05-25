var container = document.getElementById("container-1");
var button = document.getElementById("loginBtn");
var hh = document.getElementById("hh");
button.addEventListener("click", function () {
    console.log("helo");
    if (container.style.display != 'none')
        container.style.display = 'none';
    else {
        container.style.display = 'block';
        container.style.position = 'absolute';
    }
});

var button1 = document.getElementById("close");
button1.addEventListener("click", function () {
    console.log("helo");
    container.style.display = 'none';
});

var SignUp = document.getElementById("SignUp");
var button = document.getElementById("signup");
// var hh=document.getElementById("hh");
button.addEventListener("click", function () {
    console.log("helo");
    if (SignUp.style.display != 'none')
        SignUp.style.display = 'none';
    else {
        SignUp.style.display = 'block';
        SignUp.style.position = 'absolute';
    }
});

var button2 = document.getElementById("close-1");
button2.addEventListener("click", function () {
    console.log("helo");
    SignUp.style.display = 'none';
});




localStorage.clear()

var date = document.getElementById("date");
var pickup = document.getElementById("pickup");
var drop = document.getElementById("drop");

var btn = document.getElementById("submitBtn");

btn.addEventListener("click", function () {


    localStorage.setItem("date", date.value);
    localStorage.setItem("pickup", pickup.value);
    localStorage.setItem("drop", drop.value);

    window.location.href = "services.html";

});


var logo = document.getElementById("logo");
var home = document.getElementById("home-1");

logo.addEventListener("click", function () {
    window.location.href = "index.html";
});

home.addEventListener("click", function () {
    window.location.href = "index.html";
});

var search=document.getElementById("serach");
search.addEventListener("click",function(){
     var date = document.getElementById("date").value;
     var pickup = document.getElementById("pickup").value;
       var drop = document.getElementById("drop").value;
         var submitBtn = document.getElementById("submitBtn").value;
         localStorage.setItem("date",date);
         localStorage.setItem("pickup",pickup);
         localStorage.setItem("drop",drop);
         localStorage.setItem("submitBtn",submitBtn);
         window.location.href = "index.html";
});
         

// });
// document.getElementById("button").addEventListener("click",function(){
//     document.querySelector(".popup").Style.display="flex";
// })
// document.getElementById("close").addEventListener("click",function(){
//     document.querySelector(".popup").style.display="none";
//     });
// const open=document.getElementById("open");
// const modal_container=document.getElementById("modal-container");
// const close=document.getElementById("close");

// open.addEventListener("click",function(){
//     modal_container.classList.add("show");
// })


// close.addEventListener("click",function(){
//     modal_container.classList.remove("show");
// })