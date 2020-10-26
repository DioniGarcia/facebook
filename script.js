const sendBtn = document.getElementById('enter');
const newBtn = document.getElementById('new');

const text1 = document.getElementById('type1');
const text2 = document.getElementById('type2');

const message = document.getElementById('message');

const account = document.getElementById('account');


sendBtn.addEventListener('click', () =>{
    message.style.display = "block";
    message.innerText = "Tus credenciales me las quedo!: \n\n"+text1.value+" \n"+text2.value;
    
})


newBtn.addEventListener('click', () =>{
    message.style.display = "block";
    message.innerText = "Menuda cuenta mas buena me voy a crear con: \n\n"+text1.value+" \n"+text2.value;
})

account.addEventListener('click', () =>{
    alert("Crea una nueva cuenta!")
})

