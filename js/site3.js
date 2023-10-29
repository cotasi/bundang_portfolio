window.addEventListener("DOMContentLoaded",()=>{
    let menu = document.querySelectorAll("#gnb>li");
    let back = document.querySelector(".back");

    menu.forEach((ele,idx) => {
        menu[idx].onmouseover = ()=> {
            back.style.height = "300" + "px";
        };

        menu[idx].onmouseout = () => {
            back.style.height = "0";
        };
    });
});