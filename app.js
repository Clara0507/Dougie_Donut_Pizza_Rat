        

const num=document.getElementById("userInput")

const bronxButton=document.getElementById("bronx")
const brookButton=document.getElementById("brook")
const queensButton=document.getElementById("queen")
const manButton=document.getElementById("manhat")
const statIsButton=document.getElementById("statis")

const complaintsDiv=document.getElementById("complaints")
const policeResponseDiv=document.getElementById("response")


function unhide(){
   const policeResponseDiv=document.getElementById("response");
   if(policeResponseDiv[0].offsetWidth>0 && policeResponseDiv[0].offsetHeight>0){
       policeResponseDiv[0].style.visibility="visible";
   }
}



bronxButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseDiv.innerHTML=''

        let userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=BRONX` 
    
        fetch(myUrl)
            .then( (results) => results.json())
           
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
                
                    let bronxComplaints=info[i].descriptor
                    let popoResponse=info[i].resolution_description
                    
                    complaintsDiv.innerHTML+=`<p>${bronxComplaints}</p>`
                    policeResponseDiv.innerHTML+=`<button id="popoButton" onclick=${popoResponse}> NYPD RESOLUTION </button>`
                
                }
             })
        .catch((error)=>{
            console.log(error)
        })
})
              
brookButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseDiv.innerHTML=''
        
        userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=BROOKLYN` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let brookComplaints=info[i].descriptor
                let popoResponse=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${brookComplaints}</p>button>NYPD RESOLUTION</button>`
               
               }
            })
        .catch((error)=>{
            console.log(error)
        })
})

queensButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseDiv.innerHTML=''
        
        userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=QUEENS` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let queensComplaints=info[i].descriptor
                let popoResponse=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${queensComplaints}</p><button>NYPD RESOLUTION</button>`
              
               }
            })
        .catch((error)=>{
            console.log(error)
        })
})

manButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseDiv.innerHTML=''
        
        userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=MANHATTAN` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let manComplaints=info[i].descriptor
                let popoResponse=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${manComplaints}</p><button>NYPD RESOLUTION</button>`
               
               }
            })
        .catch((error)=>{
            console.log(error)
        })
})

statIsButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseDiv.innerHTML=''
        
        userNum=Number(num.value) 
    
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=STATEN%20ISLAND` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let statComplaints=info[i].descriptor
                let popoResponse=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${statComplaints}</p><button>NYPD RESOLUTION</button>`
                
               }
            })
        .catch((error)=>{
            console.log(error)
        })
})









































