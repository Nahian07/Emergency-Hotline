// Hearts

const hearts = document.getElementsByClassName("heart");
for(let heart of hearts)
{
    heart.addEventListener("click", function(){
        const heartCount = parseInt(document.getElementById("heart-cnt").innerText);
        console.log(heartCount);
        const newHeart = heartCount + 1;
        console.log(newHeart);
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
})