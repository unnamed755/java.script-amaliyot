const botlar = JSON.parse(localStorage.getItem("user"));
const studentBox = document.querySelector(".student__wrapper");
const logOutBtn = document.querySelector(".reset");


// console.log(botlar);


function renderStudent (){
    if(botlar){
        const userName = document.createElement("h2");
        const userCoin = document.createElement("span");
        const userUstoz = document.createElement("p");
        const userGroup = document.createElement("p");
        const userVaqt = document.createElement("p");


userName.className = "ism"

        userName.textContent = `Ismi:${botlar.ism}`;
        userCoin.textContent = `Koin:${botlar.coin}`;
        userUstoz.textContent = `Ustoz:${botlar.ustoz}`;
        userGroup.textContent = `Group:${botlar.group}`;
        userVaqt.textContent = `Vaqt:${botlar.vaqt}`;
        studentBox.append(userName,userCoin,userUstoz,userGroup,userVaqt);
    }

    logOutBtn.addEventListener("click" , () =>{
        localStorage.removeItem("user");
        window.location.href = "./index.html";
        studentBox.innerHTML = "";
    
    })
}
renderStudent()


const shop = document.querySelector(".Magazin");

shop.addEventListener("click" , () => {
    window.location.href = "./shop.html";
    // const magazin = botlar.product.filter(marsshop => {
        
    // })

    

})

