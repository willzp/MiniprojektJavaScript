for(let i=0; i<5; i++){
    const h = document.createElement(`h${6-i}`);
    h.innerText = `Rad ${i+1} `;
    document.body.append(h);
    const hue = 100 + (i*23);
    h.style.backgroundColor = `hsl(${hue}, 60%, 84%)`;
    h.style.textAlign = "center";

}

const flexcontainer = document.createElement("div");
flexcontainer.style.display = "flex";
flexcontainer.style.flexDirection = "row";
flexcontainer.style.justifyContent = "space-evenly"
flexcontainer.style.border = "solid";
flexcontainer.style.alignItems = "center";
const div = document.createElement("div");
div.style.display = "flex";
div.style.flexDirection = "column";


for(let i=0; i<10; i++){
    const p = document.createElement("p");
    p.innerText = i;
     p.style.margin = "0";
     p.style.width = "50px";
     p.style.border = "solid";
     p.style.borderColor = "cornflowerblue";
     p.style.display = "flex";
     p.style.flexDirection = "row";
     p.style.fl
     
     if(i%2){
         p.style.backgroundColor = "white";
        
    }    
    else if(i==4){
        p.style.backgroundColor = "cornflowerblue";
    }

    else{
        p.style.backgroundColor = "black";
        p.style.color = "white";
       
     }

     div.appendChild(p);

 }

 flexcontainer.appendChild(div);
 const div2 = document.createElement("div");
div2.style.display = "flex";
div2.style.flexDirection = "column";

 for(let i=9; i>=0; i--){
    const p = document.createElement("p");
    p.innerText = i;
    document.body.append(p);
     p.style.margin = "0";
     p.style.width = "50px";
     p.style.border = "solid";
     p.style.borderColor = "cornflowerblue";
     p.style.textAlign = "center";
     
     
     if(i%2){
         p.style.backgroundColor = "white";
 
    }   
    
    else if(i==8){
        p.style.backgroundColor = "cornflowerblue";
    }

    else{
        p.style.backgroundColor = "black";
        p.style.color = "white";
       
     }
     div2.appendChild(p);
 }

flexcontainer.appendChild(div2);
 const ul = document.createElement('ol');

const nummer = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];

for(let i=0; i<nummer.length; i++){
    const li = document.createElement('p');
    ul.append(li);
    li.innerText = nummer[i];
    li.style.margin = "0";
     li.style.width = "50px";
     li.style.border = "solid";
     li.style.borderColor = "cornflowerblue";
     li.style.textAlign = "right";

     if(i==5){
        li.style.backgroundColor = "cornflowerblue";
    }
     

    else if(i%2){
        li.style.backgroundColor = "white";
       
   }    
    
   else{
       li.style.backgroundColor = "black";
       li.style.color = "white";
      
    }

    
    
}
flexcontainer.appendChild(ul);
document.body.append(flexcontainer);