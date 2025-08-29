// Call History Array
const callData = [];

// Hearts

const hearts = document.getElementsByClassName("heart");
for(let heart of hearts)
{
    heart.addEventListener("click", function(){
        const heartCount = parseInt(document.getElementById("heart-cnt").innerText);
        const newHeart = heartCount + 1;
        document.getElementById("heart-cnt").innerText = newHeart;
    })
}

// Call Buttons

// National Emergency
document.getElementById("nationalEmergencyCallButton").addEventListener("click", function(e){
    e.preventDefault();

    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling National Emergency Number 999...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;

    // Call History Function
    const data = {
        name:"National Emergency Number",
        number:999,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Police Helpline
document.getElementById("policeHelplineCallButton").addEventListener("click", function(e){
    e.preventDefault();
    
    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Police Helpline Number 999...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;



    // Call History Function
    const data = {
        name:"Police Helpline Number",
        number:999,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Fire Service
document.getElementById("fireServiceCallButton").addEventListener("click", function(e){
    e.preventDefault();
    

    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Fire Service Number 999...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;


    // Call History Function
    const data = {
        name:"Fire Service Number",
        number:999,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Ambulance Service
document.getElementById("ambulanceServiceCallButton").addEventListener("click", function(e){
    e.preventDefault();

    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Ambulance Service 1994-999999...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;



    // Call History Function
    const data = {
        name:"Ambulance Service",
        number:'1994-999999',
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Women & Child Helpline
document.getElementById("woman&childHelpCallButton").addEventListener("click", function(e){
    e.preventDefault();

    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Women & Child Helpline 109...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;


    // Call History Function
    const data = {
        name:"Women & Child Helpline",
        number:109,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Anti-Corruption Helpline
document.getElementById("anti-CorruptionCallButton").addEventListener("click", function(e){
    e.preventDefault();

    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Anti-Corruption Helpline 106...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;


    // Call History Function
    const data = {
        name:"Anti-Corruption Helpline",
        number:106,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Electricity Helpline
document.getElementById("electricityHelpCallButton").addEventListener("click", function(e){
    e.preventDefault();
    
    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Electricity Helpline 16216...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;



    // Call History Function
    const data = {
        name:"Electricity Helpline",
        number:16216,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Brac Helpline
document.getElementById("bracHelpCallButton").addEventListener("click", function(e){
    e.preventDefault();

    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Brac Helpline 16445...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;



    // Call History Function
    const data = {
        name:"Brac Helpline",
        number:16445,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Bangladesh Railway Helpline
document.getElementById("bangladeshRailwayHelpCallButton").addEventListener("click", function(e){
    e.preventDefault();
    
    const availableCoin = parseInt(document.getElementById("coin").innerText);
    if(availableCoin < 20)
    {
        alert("❌ You Don't Have Enough Coins to Make This Call; You Need Minimum 20 Coins For Your Next Call..");
        return;
    }
    alert("📞 Calling Bangladesh Railway Helpline 163...");
    const newAvailableCoin = availableCoin - 20;
    document.getElementById("coin").innerText = newAvailableCoin;



    // Call History Function
    const data = {
        name:"Bangladesh Railway Helpline ",
        number:163,
        time:new Date().toLocaleTimeString()
    }

    callData.push(data);


    const callHistoryContainer = document.getElementById("callHistoryContainer");
    callHistoryContainer.innerText = "";
    for(const data of callData)
    {
        const div = document.createElement("div")
        div.innerHTML = `
        <div class="flex justify-between items-center p-5 bg-slate-100 rounded-2xl mt-3">
            <div>
                <h3 class="font-bold">${data.name}</h3>
                <p>${data.number}</p>
            </div>
            <div>
                <p>${data.time}</p>
            </div>
        </div>
    `

    callHistoryContainer.appendChild(div);
}
})

// Clear Button
document.getElementById("clearHistoryButton").addEventListener("click", function(e){
    e.preventDefault();
    callData.length = 0;

    document.getElementById("callHistoryContainer").innerHTML = "";
})

// Copy Button
const copy = document.getElementsByClassName("copy-btn");
for(let button of copy)
{
    button.addEventListener("click", function(e){
        e.preventDefault();

        const number = this.parentElement.querySelector(".phone-number").innerText;

        navigator.clipboard.writeText(number);

        alert(`📋 Number Copied: ${number}`);

        const copy = parseInt(document.getElementById("copy").innerText);
        const newCopyCnt = copy + 1;
        document.getElementById("copy").innerText = newCopyCnt;
    })
}