const humburger = document.querySelector(".humburger");
const navList = document.querySelector(".nav-list ");
if(humburger){
    humburger.addEventListener("click" ,()=>{
        navList.classList.toggle("open");

    });

    //Popup
    const popup=document.querySelector(".popup");
    const closepopup=document.querySelector(".popup-close");
    if(popup){
        closepopup.addEventListener("click",()=>{
            popup.classList.add("hide-popup");
        });
        window.addEventListener('load',()=>{
            setTimeout(()=>{
                popup.classList.remove("hide-popup");

            },1000);
        });
    }
}
