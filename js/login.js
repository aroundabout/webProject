function Login() {

    var oUname = document.getElementById("userName");

    var oUpass = document.getElementById("userPass");
   
    var oError = document.getElementById("errorBox");
   
    var isError = true;
   
    if (oUname.value.length > 20 || oUname.value.length < 6) {
   
     oError.innerHTML = "用户名请输入6-20位字符";
   
     isError = false;

     return;
   
    }

    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
   
     oError.innerHTML = "密码请输入6-20位字符";
   
     isError = false;

     return;
     
    }

    //得到表单

    // window.alert(2);

    //发送请求

    let xmlhttp=new XMLHttpRequest();


    xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            window.alert("登陆中");
            let resp=xmlhttp.responseText;
            console.log(resp);
            if(resp){
                window.alert("登录成功,跳转到主页");

                window.location.href="home.html";

                sessionStorage.setItem("LOR",oUname.value);
            }
            else{
                window.alert("账号或者密码错误，请重新输入");
            }
		}
    }
    let data={
        "username":oUname.value,
        "password":oUpass.value,
    };
    xmlhttp.open("POST","../php/login.php",true);
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(data));

    window.alert("loading");

}