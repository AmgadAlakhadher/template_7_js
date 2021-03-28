// check dir language 
let checkDir = localStorage.getItem("langDir");
if(checkDir) changeDir(checkDir);

//change dir to arabic language
let ar = document.querySelector(".ar_lang");
let en = document.querySelector(".en_lang");

en.addEventListener("click", () => changeDir("ltr"));
ar.addEventListener("click", () => changeDir("rtl"));

function changeDir(dir){
    document.documentElement.setAttribute("dir",dir);
    localStorage.setItem("langDir",dir);
}