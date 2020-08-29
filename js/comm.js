window.onload=function(){
    let userName=document.getElementById("LOR");
    if(!sessionStorage.getItem("LOR")){
        userName.innerHTML="登陆/注册";
    }
    else{
        userName.innerHTML="欢迎光临："+sessionStorage.getItem("LOR");
    }
}

function deleteSession(){
    sessionStorage.removeItem("LOR");
}