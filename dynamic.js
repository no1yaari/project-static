// function loadJSON(file){
//   return new Promise((resolve,reject)=>{
//     return fetch(file).then(response=>{
//       if(response.ok){
//         resolve(response.json());
//       }
//       else{
//         reject(new Error('error'));
//       }
//     })
//   })
// }
// var fetchedData=loadJSON("dynamic.json");
// fetchedData.then(data=>{
//   console.log(data);
// })
// var child2=document.queryselector("#child2");
// //carrier
// function carrier(car){
//   var h2=document.createElement("h1");
//   h2.textContent="CARRIER OBJECTIVE";
//   child2.appendchild(h2);
//
//   var heading=document.createElement("hr");
//   child2.appendchild(heading);
//
//   var p=document.createElement("p");
//   p.textContent=car.info;
//   child2.appendChild(p);
//
// }
function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState===4 && xhr.status=="200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
  })
  var rightchild=document.querySelector(".rightchild")
  function career(c){
    var chead=document.createElement("h2");
    chead.textContent="Career Objective";
  rightchild.appendChild(chead);

    var chr=document.createElement("hr");
  rightchild.appendChild(chr);

    var cp=document.createElement("p");
    cp.textContent=c.info;
  rightchild.appendChild(cp);
  }
  function education(edu){
    var ehead=document.createElement("h2");
    ehead.textContent="Eductional Details";
  rightchild.appendChild(ehead);

    var ehr=document.createElement("hr");
  rightchild.appendChild(ehr);

    let etable=document.createElement("table");
    etable.border="1";

    var tr1="<tr><td>degree</td><td>Institute</td><td>YOP</td><td>Percentage</td></tr>";
    var tr2="";
    for(i=0;i<edu.length;i++){
      tr2=tr2+"<tr><td>"+edu[i].degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].YOP+"</td><td>"+edu[i].Percentage+"</td></tr>";
    }
    etable.innerHTML=tr1+tr2;
    rightchild.appendChild(etable);
  }
  function skills(sk){
    var shead=document.createElement("h3");
    shead.textContent="SKILLS";
    rightchild.appendChild(shead);

    var shr=document.createElement("hr");
  rightchild.appendChild(shr);

    var ul=document.createElement("ul");
  rightchild.appendChild(ul);

    for(i=0;i<sk.length;i++){
      var li=document.createElement("li");
      li.textContent=sk[i].title+":"+sk[i].content;
      ul.appendChild(li);
    }


  }
