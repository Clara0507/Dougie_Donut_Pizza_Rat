// const num=document.getElementById("userInput")
// //There's a way to make this even more efficient by having all your buttons under one variable
// //Just give buttons a class to access them all at once and put that inside one variable, like this:
// //const buttons=document.getElementsByClassName("yourButtonsClassName")
// const bronxButton=document.getElementById("bronx")
// const brookButton=document.getElementById("brook")
// const queensButton=document.getElementById("queen")
// const manButton=document.getElementById("manhat")
// const statIsButton=document.getElementById("status")

// const complaintsDiv=document.getElementById("complaints")
// const policeResponse=document.getElementById("poporesponse")

// //Doing it this way I would have to have 5 addEventListeners with 5 different URLs for each borough-NOT EFFICIENT, NOT DRY
// //bronxButton.addEventListener("click", () =>{ //Take out the function, name it and then call that function for each eventlistener button like on line 38
//                                                //That function will have everything below inside of it
//     function moreEfficient(){ //This function will be called for every button
//         // let boroughs=ev.target.id
//         // console.log(boroughs)
//         let userNum=Number(num.value) //Usually with any type of input will be returned as string so here I changed it to a number
//         //Can add a limit to your URL itself (look through API documentation) find a limit query that'll let you add the user input into the URL
//         //So userNum will go into your URL to set the limit of results to the number the user entered like this $limit=${userNum}
//         const myUrl=`https://data.cityofnewyork.us/resource/erm2-nwe9.json?agency=NYPD&$limit=${userNum}` //Should have one url and one fetch call to shorten your code, make it DRY
    
//         fetch(myUrl)
//             .then( (results) => results.json())
           
//             .then( (info) =>{
//                 for(let i=0; i<info.length; i++){
                
//                     let bronxComplaints=info[i].descriptor //I want each descriptor but this is giving me the last index descriptor only
                    
//                     complaintsDiv.innerHTML+=`<p>${bronxComplaints}</p>` //Need to access the values of the property descriptor
                   
//                     //console.log(info)//Info is the array of objects (inspected in console) To access an element of an array you need the index [0]
//                                     //Each object has a property of descriptor so you need to access that property of each object
//                 }
                
            
//     })//This parenthesis comes from the open ( after my second .then on line 24

// })
//     //Add your borough limits here inside your addEventListener, so when you click the button it brings you back the information you need already filtered
//     bronxButton.addEventListener("click", moreEfficient()) //So at the end do your eventlisteners with the command 'click' and the function name
//     //brookButton.addEventListener('click', functionName ) //So the functionName are the instructions to make the cake, inside the addEventListener
//                                                         //we do not need to invoke(call) the function because then you're telling the event listener
//                                                         //to make the cake. All you wanna do is hand over the recipe and eventListener can make the
//                                                         //the cake once it's clicked
        

const num=document.getElementById("userInput")

const bronxButton=document.getElementById("bronx")
const brookButton=document.getElementById("brook")
const queensButton=document.getElementById("queen")
const manButton=document.getElementById("manhat")
const statIsButton=document.getElementById("statis")

const complaintsDiv=document.getElementById("complaints")
const policeResponseBtn=document.getElementById("response")
const popoResolves=document.getElementById("resolution")


// function unhide(){
//    const policeResponseDiv=document.getElementById("response");
//    if(policeResponseDiv[0].offsetWidth>0 && policeResponseDiv[0].offsetHeight>0){
//        policeResponseDiv[0].style.visibility="visible";
//    }
// }


// const clickEvent=()=>{
//     if(policeResponseDiv.style.display==='none'){
//         policeResponseDiv.style.display='block'
//     }
//     else{
//         policeResponseDiv.style.display='none'
//     }
//     //console.log(a);
//     //if(a>0)
//     // if(policeResponseDiv==true){
//     //     document.getElementById("response").style.display='inline';
//     //     return policeResponseDiv==false
//     // }
//     // else{
//     //     document.getElementById("response").style.display='none';
//     //     return policeResponseDiv==true
//     // }  
// }

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
                    
                    // let resolute=document.getElementById("resolutions")
                    // resolute.addEventListener("click", ()=>{
                    //     <p>${popoResponse}</p>
                    // })
                    //policeResponseDiv.innerHTML+=`<button onclick="clickEvent()"${popoResponse}> NYPD RESOLUTION </button>`
                    //policeResponseDiv.innerHTML += `<button onclick=${popoResponse}> NYPD RESOLUTION </button>`

                    //let whatPopoDid=`<button onclick=${'What Did The Police Do?'}</button>`
                    
                    //policeResponse.innerHTML
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





