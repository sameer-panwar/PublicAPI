document.querySelector(".search").addEventListener('click',()=>{
    getData();
});

document.querySelector('.user-input').addEventListener('keydown',(event)=>{
    let current=event.key;
    if(current ==='Enter'){
        getData();
    }
})


function getData(){
    
    const userId=document.querySelector(".user-input").value;
    const apiUrl=`https://jsonplaceholder.typicode.com/users/${userId}`

    if(userId=== ''){
        alert("Enter the Id please");
    }


    fetch(apiUrl)
        .then(response => response.json())
        .then(data =>{
            DisplayData(data);
        })
        .catch(error=>{
            console.log("Error fetching current data:",error);
            alert("Error Fetching User Data");
        })
}


function DisplayData(data){
     const name=document.querySelector('.name');
     const details=document.querySelector('.details');

     name.innerHTML=data.name;

     detailsHTML=`
        <ul>
            <li>Username:${data.username}</li>
            <li>Email:${data.email}</li>
            <li>Phone:${data.phone}</li>
            <li>Website:${data.website}</li>
        </ul>
        <div>
            <p>Wanna know in which company he is working currently??<p>
            <button class="clickedYes">Yes</button><button class="displayNO">No</button> 
            <div class="companyOutput"></div>
        </div>
    `;
    details.innerHTML=detailsHTML;

    document.querySelector('.clickedYes').addEventListener('click',()=>{
        displayCompany(data);
    })

    document.querySelector('.displayNO').addEventListener('click',()=>{
        displayNoStatement();
    })
}

function displayCompany(data){
    const companyOutput=document.querySelector('.companyOutput'); 
    companyOutput.innerHTML='';
    companyOutput.innerHTML=`
    <div>
        Name: ${data.company.name}<br>
        catchPhrase: ${data.company.catchPhrase}<br>
        Bs: ${data.company.bs}<br>
    </div>
`;  
}


function displayNoStatement(){
    const companyOutput=document.querySelector('.companyOutput');
    companyOutput.innerHTML='';
    companyOutput.innerHTML="Okay!  Have a good day!";
}
    