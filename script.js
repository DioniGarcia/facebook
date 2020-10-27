const sendBtn = document.getElementById('enter');
const newBtn = document.getElementById('new');

const text1 = document.getElementById('type1');
const text2 = document.getElementById('type2');

const message = document.getElementById('message');

const account = document.getElementById('account');


sendBtn.addEventListener('click', () =>{

    if(areFilled()){
        message.style.display = "block";
        message.innerText = "Tus credenciales me las quedo!: \n\n"+text1.value+" \n"+text2.value;
    }
    
    
})


newBtn.addEventListener('click', () =>{
    if(areFilled()){
        message.style.display = "block";
        message.innerText = "Menuda cuenta mas buena me voy a crear con: \n\n"+text1.value+" \n"+text2.value;
    }
    
})

account.addEventListener('click', () =>{
    alert("Crea una nueva cuenta!");
})

function areFilled(){
    return text1.value !== "" && text2.value !== "";
}

