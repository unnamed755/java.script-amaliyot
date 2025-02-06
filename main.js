let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg"); 


spaceEye.addEventListener("mousedown" , (evt)=> {
    evt.preventDefault();
    spaceParol.setAttribute("type" , "text")
})

spaceEye.addEventListener("mouseout" , (evt)=> {
    evt.preventDefault();
    spaceParol.setAttribute("type" , "password")
})

spaceForm.addEventListener("submit" , (e) => {
    e.preventDefault();
    const loginValue = Number(spaceLogin.value.trim());
    const passwordValue = Number(spaceParol.value.trim());
    
    let topilganStudent = null;
    
    students.forEach(oquvchi => {
        if(oquvchi.login === loginValue && oquvchi.parol === passwordValue){
            topilganStudent = oquvchi;
        }
    })
    if(topilganStudent){
        errorMsg.style.display = "none";
       localStorage.setItem("user", JSON.stringify(topilganStudent)) 

       window.location.href = "./student.html";
    }else{
        errorMsg.style.display = "block";
        errorMsg.textContent = "Login yoki parol xato"
        localStorage.removeItem("user");  // login yoki parol xato bo'lsa keyni o'chiramiz
    }
    
    spaceLogin.value = "";
    spaceParol.value = "";
    
})

function ochirbYoqish(){
   if(spaceLogin.value && spaceParol.value){
    btn.style.backgroundColor = "orange";
    btn.disabled = false;
   } 
   else{
    btn.style.backgroundColor = "lightgray";
    btn.disabled = true;
   }
}
spaceLogin.addEventListener("input", ochirbYoqish);
spaceParol.addEventListener("input", ochirbYoqish )



// const mapQilingan = students.map(objectlar => {
//     return objectlar;
// })

// console.log(mapQilingan);

// const filterQilingan = students.map(objectlar => {

//     return objectlar.coin > 1000; 

// let requestQueue = [];
// let isRequestRunning = false;

// function fetchNationality(name) {
//   requestQueue.push(name);
//   processQueue();
// }

// function processQueue() {
//   if (isRequestRunning || requestQueue.length === 0) return;

//   isRequestRunning = true;
//   let name = requestQueue.shift();

//   fetch(`https://api.nationalize.io/?name=${name}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => console.error(err))
//     .finally(() => {
//       isRequestRunning = false;
//       if (requestQueue.length > 0) {
//         setTimeout(processQueue, 1500); // 1.5 sekund kutish
//       }
//     });
// }

// fetchNationality("sunnat");
// fetchNationality("emirna");




// const oquvchi = students.map(obyektlar => {
//   console.log(obyektlar.ism);
//   return  obyektlar.coin > 1000

// })
// console.log(oquvchi);


// const oquvchi = students.filter(obyektlar => {
//   return  obyektlar.coin > 1000
// })
// console.log(oquvchi);


// })
// console.log(filterQilingan);

