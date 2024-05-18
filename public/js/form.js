const username = document.querySelector('.username');
const password = document.querySelector('.password');
const submitBtn = document.querySelector('.submit-btn');

window.onload = () =>{
    if(sessionStorage.username){
      location.href = '/';
    }
  }

if(document.querySelector('.heading').textContent==="login"){
    submitBtn.addEventListener('click',()=>{
        fetch('/login-user', {
            method:'post',
            headers: new Headers({'Content-Type': 'application/json'}),
            body: JSON.stringify({
                username: username.value,
                password:password.value
            })
        })
        .then(res=>res.json())
        .then(data => {
            validateData(data);
        })
    })
} else{
    submitBtn.addEventListener('click',()=>{
        if(password.value.length<8){
            alertBox("password too short")
        }
        else{
            fetch('/register-user', {
                method:'post',
                headers: new Headers({'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    username: username.value,
                    password:password.value
                })
            })
            .then(res=>res.json())
            .then(data => {
                if(data.username){
                    location.href = '/login'
                } else{
                    alertBox(data);
                }
            })
        }
    })
}

const validateData = (data)=>{
    sessionStorage.setItem("token",data[1].accessToken);
    if(typeof data==='object'){
        data=data[0];
    }
    if(!data.username){
        alertBox(data);
    } else{
        const date = new Date();
        sessionStorage.startTime = date.getTime();
        sessionStorage.username = data.username;
        sessionStorage.money = data.money;
        sessionStorage.sukuna = data.sukuna;
        sessionStorage.yuta = data.yuta;
        sessionStorage.kenjaku = data.kenjaku;
        sessionStorage.todo = data.todo;
        sessionStorage.gojo = data.gojo;
        sessionStorage.nobara = data.nobara;
        sessionStorage.megumi = data.megumi;
        sessionStorage.kashimo = data.kashimo;
        sessionStorage.maki = data.maki;
        sessionStorage.hakari = data.hakari;
        sessionStorage.uraume = data.uraume;
        sessionStorage.higuruma = data.higuruma;
        sessionStorage.yuji = data.yuji;
        sessionStorage.takaba = data.takaba;
        sessionStorage.uiui=data.uiui;
        sessionStorage.ino=data.ino;
        sessionStorage.kusakabe=data.kusakabe;
        sessionStorage.miguel=data.miguel;
        sessionStorage.choso=data.choso;
        sessionStorage.miwa=data.miwa;
        sessionStorage.mechamaru=data.mechamaru;
        sessionStorage.meimei = data.meimei;
        sessionStorage.shoko = data.shoko;
        //sessionStorage = JSON.parse(data)
        location.href = '/';
    }
}

const alertBox = (data) =>{
    const alertContainer = document.querySelector('.alert-box');
    const alertMsg = document.querySelector('.alert')
    alertMsg.innerHTML = data;

    alertContainer.style.top = `5%`;
    setTimeout(() =>{
        alertContainer.style.top = null;
    },5000)
}