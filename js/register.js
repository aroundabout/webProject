function register() {

    var oUname = document.getElementById("userName");
   
    var oUpass = document.getElementById("userPass");

    var oUaddress = document.getElementById("userAddress");

    var oUphone =document.getElementById("userPhone");
   
    var oError = document.getElementById("errorBox");
   
    var isError = true;
   
    if (oUname.value.length > 20 || oUname.value.length < 6) {
   
     oError.innerHTML = "用户名请输入6-20位字符";
   
     isError = false;
   
     return;
   
    }

    if (oUpass.value.length > 20 || oUpass.value.length < 6) {
   
     oError.innerHTML = "密码请输入6-20位字符"
   
     isError = false;
   
     return;
   
    }

    if(oUaddress.value.length>20 || oUaddress.value.length<1){

        oError.innerHTML = "地址请输入1-20位字符"
   
        isError = false;
      
        return;
    }

    if(oUphone.value.length!=11){

        oError.innerHTML = "请输入11位手机"
   
        isError = false;
      
        return;
    }

    //得到表单


    //发送请求

    let xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
           window.alert("注册中");
           let resp=xmlhttp.responseText;
           if(resp){
                window.alert("注册成功，跳转到登陆页面");

                window.location.href="login.html";
                
           }
           else{
               window.alert("该账号已被注册");
           }
		}
    }

    let data={
        "username":oUname.value,
        "password":oUpass.value,
        "address":oUaddress.value,
        "phone":oUphone.value,
    };
    xmlhttp.open("POST","../php/register.php",true);
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(data));

    console.log(data);

    window.alert("loading");

   }

