const num=document.getElementById("userInput")

const bronxButton=document.getElementById("bronx")
const brookButton=document.getElementById("brook")
const queensButton=document.getElementById("queen")
const manButton=document.getElementById("manhat")
const statIsButton=document.getElementById("statis")

const complaintsDiv=document.getElementById("complaints")
const policeResponseBtn=document.getElementById("response")
const popoResolves=document.getElementById("resolution")



bronxButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseBtn.innerHTML=''
        popoResolves.innerHTML=''

        let userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=BRONX` 
    
        fetch(myUrl)
            .then( (results) => results.json())
           
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
                
                let bronxComplaints=info[i].descriptor
                let whatPopoDid=info[i].resolution_description
                    
                complaintsDiv.innerHTML+=`<p>${bronxComplaints}</p>`
                policeResponseBtn.innerHTML+=`<button id="popoButton" onclick=${whatPopoDid}> NYPD RESOLUTION </button>`
                popoResolves.innerHTML+=`<p>${whatPopoDid}`
                }
             })
        .catch((error)=>{
            console.log(error)
        })
})
              
brookButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseBtn.innerHTML=''
        popoResolves.innerHTML=''
        
        userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=BROOKLYN` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let brookComplaints=info[i].descriptor
                let whatPopoDid=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${brookComplaints}</p>`
                policeResponseBtn.innerHTML+=`<button id="popoButton" onclick=${whatPopoDid}> NYPD RESOLUTION </button>`
                popoResolves.innerHTML+=`<p>${whatPopoDid}`
                }
            })
        .catch((error)=>{
            console.log(error)
        })
})

queensButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseBtn.innerHTML=''
        popoResolves.innerHTML=''
        
        userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=QUEENS` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let queensComplaints=info[i].descriptor
                let whatPopoDid=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${queensComplaints}</p>`
                policeResponseBtn.innerHTML+=`<button id="popoButton" onclick=${whatPopoDid}> NYPD RESOLUTION </button>`
                popoResolves.innerHTML+=`<p>${whatPopoDid}`
                }
            })
        .catch((error)=>{
            console.log(error)
        })
})

manButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseBtn.innerHTML=''
        popoResolves.innerHTML=''
        
        userNum=Number(num.value) 
        
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=MANHATTAN` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let manComplaints=info[i].descriptor
                let whatPopoDid=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${manComplaints}</p>`
                policeResponseBtn.innerHTML+=`<button id="popoButton" onclick=${whatPopoDid}> NYPD RESOLUTION </button>`
                popoResolves.innerHTML+=`<p>${whatPopoDid}`
                }
            })
        .catch((error)=>{
            console.log(error)
        })
})

statIsButton.addEventListener("click", () =>{ 
        complaintsDiv.innerHTML=''
        policeResponseBtn.innerHTML=''
        popoResolves.innerHTML=''
        
        userNum=Number(num.value) 
    
        const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}&borough=STATEN%20ISLAND` 

        fetch(myUrl)
            .then( (results) => results.json())
       
            .then( (info) =>{
                for(let i=0; i<info.length; i++){
            
                let statComplaints=info[i].descriptor
                let whatPopoDid=info[i].resolution_description 
                
                complaintsDiv.innerHTML+=`<p>${statComplaints}</p>`
                policeResponseBtn.innerHTML+=`<button id="popoButton" onclick=${whatPopoDid}> NYPD RESOLUTION </button>`
                popoResolves.innerHTML+=`<p>${whatPopoDid}`
                }
            })
        .catch((error)=>{
            console.log(error)
        })
})









































