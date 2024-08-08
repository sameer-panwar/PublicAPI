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
    }else if(userId>10){
        document.querySelector('.name')
            .innerHTML="Enter ID between 1-10";
    }else{
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
}


function DisplayData(data){
     const name=document.querySelector('.name');
     const details=document.querySelector('.details');

     nameHTML=`
        <div style="color:black;">You are</div>
        <div>${data.name}</div>`;

     name.innerHTML=nameHTML;

     detailsHTML=`
        <ul>
            <li><span>Username:</span>${data.username}</li>
            <li><span>Email:</span>${data.email}</li>
            <li><span>Phone:</span>${data.phone}</li>
            <li><span>Website:</span>${data.website}</li>
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
        <span>Name:</span> ${data.company.name}<br>
        <span>catchPhrase:</span> ${data.company.catchPhrase}<br>
        <span>Bs:</span> ${data.company.bs}<br>
    </div>
`;  
}


function displayNoStatement(){
    const companyOutput=document.querySelector('.companyOutput');
    companyOutput.innerHTML='';
    companyOutput.innerHTML="Okay!  Have a good day!";
}
    