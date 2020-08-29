window.onload=function(){
    console.log("orderlist.js running");

    if(!sessionStorage.getItem("LOR")){
        window.alert("您还未登陆，跳转登陆页面");

        window.location.href="login.html";

        return;
    }

    let userName=document.getElementById("LOR");


    if(!sessionStorage.getItem("LOR")){
        userName.innerHTML="登陆/注册";
    }
    else{
        userName.innerHTML="欢迎光临："+sessionStorage.getItem("LOR");
    }

    let xmlhttp=new XMLHttpRequest();
    xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
            let resp=JSON.parse(xmlhttp.responseText);
            for(let i=0;i<resp.length;i++){
                let productid=resp[i].productid;
                let productName=resp[i].name;
                let productPrice=resp[i].price;
                let productPhone=resp[i].phone;
                let productAddress=resp[i].address;
                console.log(productName);
                console.log(productPrice);
                console.log(productPhone);
                console.log(productAddress);

                let tdName=document.createElement("td");
                let tdNameText=document.createTextNode(productName);
                tdName.appendChild(tdNameText);

                let tdPrice=document.createElement("td");
                let tdPriceText=document.createTextNode(productPrice);
                tdPrice.appendChild(tdPriceText);

                let tdPhone=document.createElement("td");
                let tdPhoneText=document.createTextNode(productPhone);
                tdPhone.appendChild(tdPhoneText);

                let tdAddress=document.createElement("td");
                let tdAddressText=document.createTextNode(productAddress);
                tdAddress.appendChild(tdAddressText);

                let tdRemove=document.createElement("td");
                let remove=document.createElement("button");
                remove.className="btn";
                remove.type="button";
                remove.innerText="删除";
                remove.onclick=function(){
                    let newxmlhttp=new XMLHttpRequest();
                    newxmlhttp.onreadystatechange=function(){
                        if(newxmlhttp.readyState==4 && newxmlhttp.status==200){
                            let responese=newxmlhttp.responseText;
                            if(responese){
                                window.alert("移除成功");
                                location.reload();
                            }
                            else{
                                window.alert("移除失败");
                                location.reload();
                            }
                        }
                    }
                    let data={
                        "user":sessionStorage.getItem("LOR"),
                        "productid":productid,
                    }
                    newxmlhttp.open("POST","../php/removeOrder.php",true);
                    newxmlhttp.setRequestHeader('Content-Type','application/json');
                    newxmlhttp.send(JSON.stringify(data));
                };
                tdRemove.appendChild(remove);

                let tr=document.createElement("tr");
                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdPhone);
                tr.appendChild(tdAddress);
                tr.appendChild(tdRemove);

                document.getElementById("ordertable").appendChild(tr);
            }
		}
    }

    let data={
        "username":sessionStorage.getItem("LOR"),
    };
    xmlhttp.open("POST","../php/orderlist.php",true);
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(data));

}

function deleteSession(){
    sessionStorage.removeItem("LOR");
}
