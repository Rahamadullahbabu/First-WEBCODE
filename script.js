const bodyContainer = document.createElement("div");
bodyContainer.className = "container";
document.body.appendChild(bodyContainer);

const webInstructions = document.createElement("p");
webInstructions.className = "web-instructions";
webInstructions.innerText = `Scroll Down TO see all the Breweries `
bodyContainer.appendChild(webInstructions);

async function foo(){
    const res = await fetch("https://api.openbrewerydb.org/breweries")
     data = await res.json()
     for(var i=0;i<data.length;i++){
            var div= document.createElement("div");
            
            div.innerHTML=
            
            `<div class="container">
               <div class="row">
                <div class=".col-md-4">
                <div class="card-group">
            <div class="card" >
               <div class="card-body">
           
               <h5 class="card-text"> Brewery Name: ${data[i].name}</h5>
               <h5 class="card-text"> Brewery Type: ${data[i].brewery_type}</h5>
               <h5 class="card-text"> Brewery's Address : ${data[i].city}</h5>
               <h5 class="card-text"> Brewery Website url: ${data[i].website_url}</h5>
               <h5 class="card-text"> Brewery Phone No: ${data[i].phone}</h5>
            
               
            </div>
            
            </div>`
            document.body.append(div);
             
         }
        }
        foo();