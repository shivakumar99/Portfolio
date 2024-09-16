var sec1 = document.querySelector(".first-page");
var clgImg = document.querySelector(".education-part img");
var clgTextCont = document.querySelector(".clg-text-part");
var clgText = document.querySelector(".clg-text-part p")
var splitText = clgText.textContent.split("");

var skillsPart = document.querySelector(".skills-part");
var cardCont = document.querySelector(".card-cont");
var hobbiesPart = document.querySelector(".hobbies-part");



var delay = 0.1;


clgText.textContent="";
for(let i=0;i<splitText.length;i++){
    if(splitText[i] == " "){
        clgTextCont.innerHTML += `<span data-delay= ${delay=delay+0.03} > &nbsp</span>`;
    }
    else{
    clgTextCont.innerHTML += `<span data-delay= ${delay=delay+0.03}>`+splitText[i]+" </span>";
    }   
}


let ctr = 0;
let flag = 1;
function startAnim(){
let timer = setInterval(anim,50);

}

function txtAnim(item){   
    item.style.animation="clgTxtAnim 0.1s ease-out "+item.dataset.delay+"s";
    item.style.animationFillMode="forwards"
}

function rmAnim(item){
    item.style.animation="none";
}

function redir(){
    window.location="projects.html";
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.65
  }

  

observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if( entry.isIntersecting){
           if(entry.intersectionRatio > 0){ 
            clgImg.style.opacity="1";
            var clgText = Array.from(document.querySelectorAll(".clg-text-part span"));
            clgText.forEach(txtAnim);

           }
        }
        else{
            clgImg.style.opacity="0";
            // var clgText = Array.from(document.querySelectorAll(".clg-text-part span"));
            // clgText.forEach(rmAnim);
       }
    })
},options)

observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            if(entry.intersectionRatio > 0){ 
                skillsPart.style.opacity="1";
                var typ = document.querySelector(".typing");
                typ.style.animation = "type 4s steps(100) forwards";
               }
        }
        else{
            skillsPart.style.opacity="0";
            var typ = document.querySelector(".typing");
            typ.style.animation="none";
        }
    })
},options)

observer2 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting && entry.intersectionRatio > 0.5){
            console.log(entry.intersectionRatio)
            if(entry.intersectionRatio > 0){ 
                console.log("*3");
                cardCont.style.transform="translateY(0)";
               }
        }
        else{
            cardCont.style.transform="translateY(-200%)";
        }
    })
},options)


observer.observe(clgTextCont);
observer1.observe(skillsPart);
observer2.observe(hobbiesPart);