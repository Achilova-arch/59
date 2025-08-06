const ul=document.getElementById("ul");
let ismlar=JSON.parse(localStorage.getItem("ismlar"))||[];
function chizish(data){
    ul.innerHTML="";
    data.map(e=>{
        const li=document.createElement("li");
        li.textContent=e;
        ul.appendChild(li)
    })
}
chizish(ismlar);
const ism=prompt("ism kiriting");
ismlar.push(ism);
localStorage.setItem("ismlar",JSON.stringify(ismlar));
chizish(ismlar)