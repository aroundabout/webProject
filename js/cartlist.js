window.onload=function(){
    console.log("cartlist.js running");

    if(!sessionStorage.getItem("LOR")){
        window.alert("您还未登陆，跳转登陆页面");

        window.location.href="login.html";

        return;
    }

    let userName=document.getElementById("LOR");

    console.log(userName);

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
                let Productname=resp[i].name;
                let Productprice=resp[i].price;
                let Proid=resp[i].productid;
                console.log(Productname);
                console.log(Productprice);
                console.log(Proid);
                console.log("change");

                let tdName=document.createElement("td");
                let tdNameText=document.createTextNode(Productname);
                tdName.appendChild(tdNameText);
                
                let tdPrice=document.createElement("td");
                let tdPriceText=document.createTextNode(Productprice);
                tdPrice.appendChild(tdPriceText);

                let tdbuy=document.createElement("td");
                let buy=document.createElement("button");
                buy.className="btn";
                buy.type="button";
                buy.innerHTML="购买";
                buy.onclick=function(){
                    window.alert("onclick");
                    let newxmlhttp=new XMLHttpRequest();
                    newxmlhttp.onreadystatechange=function(){
                        if(newxmlhttp.readyState==4 && newxmlhttp.status==200){
                            let responese=newxmlhttp.responseText;
                            console.log(responese);
                            if(responese){
                                window.alert("购买成功");
                            }
                            else{
                                window.alert("购买失败,您已经购买过该产品");
                            }
                        }
                    }
                    let data={
                        "user":sessionStorage.getItem("LOR"),
                        "productid":Proid,
                    }
                    newxmlhttp.open("POST","../php/buyandremove.php",true);
                    newxmlhttp.setRequestHeader('Content-Type','application/json');
                    newxmlhttp.send(JSON.stringify(data));
                    location.reload();
                };
                tdbuy.appendChild(buy);
                
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
                        "productid":Proid,
                    }
                    newxmlhttp.open("POST","../php/remove.php",true);
                    newxmlhttp.setRequestHeader('Content-Type','application/json');
                    newxmlhttp.send(JSON.stringify(data));
                };
                tdRemove.appendChild(remove);

                let tr=document.createElement("tr");
                tr.appendChild(tdName);
                tr.appendChild(tdPrice);
                tr.appendChild(tdbuy);
                tr.appendChild(tdRemove);

                document.getElementById("shoppingtable").appendChild(tr);
                
            }
		}
    }

    let data={
        "username":sessionStorage.getItem("LOR"),
    };
    xmlhttp.open("POST","../php/cartlist.php",true);
    xmlhttp.setRequestHeader('Content-Type','application/json');
    xmlhttp.send(JSON.stringify(data));
}

function deleteSession(){
    sessionStorage.removeItem("LOR");
}
