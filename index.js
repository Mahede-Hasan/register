let clientbtn = document.getElementById('client-btn');
let buyerbtn = document.getElementById('buyer-btn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

clientbtn.onclick = function(){
    title.innerHTML= 'Register Client';
    buyerbtn.classList.add('disable')
    clientbtn.classList.remove('disable')
}
buyerbtn.onclick = function(){
    title.innerHTML= 'Register Buyer';
    buyerbtn.classList.remove('disable')
    clientbtn.classList.add('disable')
}
