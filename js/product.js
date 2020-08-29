function checkLogin(){


    if(!sessionStorage.getItem("LOR")){
        window.alert("您尚未登陆，请登陆");
        window.location.href="../login.html";
        return 0;
    }
    else{
        return 1;
    }
}
function addcart(_Pname,_Pprice,_Pproductid){

    if(checkLogin()==0){
        return;
    }
    var Pname=_Pname;
    var Pprice=_Pprice;
    var Pproductid=_Pproductid;

    let xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            console.log("running");
           let resp=xmlhttp.responseText;

           if(resp){
                window.alert("商品已加入购物车");
           }
           else{
                window.alert("购物车中已有该商品");
           }
		}
    }

    let data={
        "user":sessionStorage.getItem("LOR"),
        "productid":Pproductid,
        "name":Pname,
        "price":Pprice,
    };
    console.log(data);

    xmlhttp.open("POST","../../php/addcart.php",true);
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(data));

    window.alert("loading");

}

function buynow(_Pname,_Pprice,_Pproductid){

    if(checkLogin()==0){
        return;
    }

    var Pname=_Pname;
    var Pprice=_Pprice;
    var Pproductid=_Pproductid;

    let xmlhttp=new XMLHttpRequest();

    xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
           let resp=xmlhttp.responseText;

           if(resp){
                window.alert("商品已加入订单");
           }
           else{
                window.alert("订单中已有该商品");
           }
		}
    }

    let data={
        "user":sessionStorage.getItem("LOR"),
        "productid":Pproductid,
        "name":Pname,
        "price":Pprice,
    };
    console.log(data);

    xmlhttp.open("POST","../../php/buynow.php",true);
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(data));

    window.alert("loading");
}

