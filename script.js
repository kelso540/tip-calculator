const selections = {
    mainCard: document.querySelector(".mainCard"), 
    centeringDiv: document.querySelector(".centeringDiv"), 
    billTotal: document.querySelector(".billInput"), 
    tip5: document.querySelector(".A"), 
    tip10: document.querySelector(".B"), 
    tip15: document.querySelector(".C"), 
    tip25: document.querySelector(".D"), 
    tip50: document.querySelector(".E"), 
    customTip: document.querySelector(".F"),
    tipTotal: document.querySelector(".tipTotal"),
    peopleInput: document.querySelector(".peopleInput"), 
    totalPer: document.querySelector(".totalPerPerson"),
    reset: document.querySelector(".reset"), 
    customInput: document.querySelector(".customInput"), 
    onlyZeroText: document.querySelector(".onlyZeroText"), 
};

const values = {
    tip: 0,
    total: 0,
    totalPerPerson: 0,
    customValue: 0, 
    tip5: 0.05, 
    tip10: 0.10,
    tip15: 0.15,
    tip25: 0.25,
    tip50: 0.50,
};

//local scope inside function, global scope outside of function. 

function resetValues () {
    selections.billTotal.value = ""; 
    selections.peopleInput.value = "";
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    selections.reset.style.backgroundColor = "hsl(186, 14%, 43%)"; 
    selections.tip5.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip10.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip15.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip25.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip50.style.backgroundColor = "hsl(183, 100%, 15%)"; 
};

function changeToInput () {
    selections.customTip.style.display = "none"; 
    selections.customInput.style.display = "block";
    selections.customInput.focus(); 
    selections.reset.style.backgroundColor = "hsl(186, 14%, 43%)";
    selections.tip5.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip10.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip15.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip25.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip50.style.backgroundColor = "hsl(183, 100%, 15%)"; 
};
function cancelInput () {
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    selections.customInput.value = ""; 
}

function checkForZero () {
    if (selections.peopleInput.value === "0"){
        selections.onlyZeroText.style.display = "block";
        selections.peopleInput.style.outline = "none"; 
        selections.peopleInput.style.border = "solid 2px red"; 
        selections.peopleInput.style.borderRadius = "4px"; 
    } else {
        selections.onlyZeroText.style.display = "none"; 
        selections.peopleInput.style.outline = ""; 
        selections.peopleInput.style.border = ""; 
        selections.peopleInput.style.borderRadius = ""; 
    }
}

function calculateTip5 () {
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    values.tip = selections.billTotal.value * values.tip5; 
    values.total = Number(selections.billTotal.value) + Number(values.tip);
    selections.tipTotal.value = `$${values.tip.toFixed(2)}`; 
    selections.reset.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip5.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip10.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip15.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip25.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip50.style.backgroundColor = "hsl(183, 100%, 15%)";
    if (selections.peopleInput.value === "" || selections.peopleInput.value === "0"){
        selections.totalPer.value = `$${values.total.toFixed(2)}`; 
    } else {
        values.totalPerPerson = values.total / selections.peopleInput.value;
        selections.totalPer.value = `$${values.totalPerPerson.toFixed(2)}`;
    };
};

function calculateTip10 () {
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    values.tip = selections.billTotal.value * values.tip10; 
    values.total = Number(selections.billTotal.value) + Number(values.tip);
    selections.tipTotal.value = `$${values.tip.toFixed(2)}`;  
    selections.reset.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip10.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip5.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip15.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip25.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip50.style.backgroundColor = "hsl(183, 100%, 15%)";
    if (selections.peopleInput.value === "" || selections.peopleInput.value === "0"){
        selections.totalPer.value = `$${values.total.toFixed(2)}`; 
    } else {
        values.totalPerPerson = values.total / selections.peopleInput.value;
        selections.totalPer.value = `$${values.totalPerPerson.toFixed(2)}`;
    };
};

function calculateTip15 () {
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    values.tip = selections.billTotal.value * values.tip15; 
    values.total = Number(selections.billTotal.value) + Number(values.tip);
    selections.tipTotal.value = `$${values.tip.toFixed(2)}`;  
    selections.reset.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip15.style.backgroundColor = "hsl(172, 67%, 45%)";
    selections.tip10.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip5.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip25.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip50.style.backgroundColor = "hsl(183, 100%, 15%)"; 
    if (selections.peopleInput.value === "" || selections.peopleInput.value === "0"){
        selections.totalPer.value = `$${values.total.toFixed(2)}`; 
    } else {
        values.totalPerPerson = values.total / selections.peopleInput.value;
        selections.totalPer.value = `$${values.totalPerPerson.toFixed(2)}`;
    };
};

function calculateTip25 () {
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    values.tip = selections.billTotal.value * values.tip25; 
    values.total = Number(selections.billTotal.value) + Number(values.tip);
    selections.tipTotal.value = `$${values.tip.toFixed(2)}`; 
    selections.reset.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip25.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip10.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip15.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip5.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip50.style.backgroundColor = "hsl(183, 100%, 15%)"; 
    if (selections.peopleInput.value === "" || selections.peopleInput.value === "0"){
        selections.totalPer.value = `$${values.total.toFixed(2)}`; 
    } else {
        values.totalPerPerson = values.total / selections.peopleInput.value;
        selections.totalPer.value = `$${values.totalPerPerson.toFixed(2)}`;
    };
};

function calculateTip50 () {
    selections.customTip.style.display = "flex"; 
    selections.customInput.style.display = "none";
    values.tip = selections.billTotal.value * values.tip50; 
    values.total = Number(selections.billTotal.value) + Number(values.tip);
    selections.tipTotal.value = `$${values.tip.toFixed(2)}`; 
    selections.reset.style.backgroundColor = "hsl(172, 67%, 45%)"; 
    selections.tip50.style.backgroundColor = "hsl(172, 67%, 45%)";
    selections.tip10.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip15.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip25.style.backgroundColor = "hsl(183, 100%, 15%)";
    selections.tip5.style.backgroundColor = "hsl(183, 100%, 15%)";  
    if (selections.peopleInput.value === "" || selections.peopleInput.value === "0"){
        selections.totalPer.value = `$${values.total.toFixed(2)}`; 
    } else {
        values.totalPerPerson = values.total / selections.peopleInput.value;
        selections.totalPer.value = `$${values.totalPerPerson.toFixed(2)}`;
    };
};

function calculateTipCustom () {
    values.tip = selections.billTotal.value * Number(selections.customInput.value / 100); 
    values.total = Number(selections.billTotal.value) + Number(values.tip);
    selections.tipTotal.value = `$${values.tip.toFixed(2)}`;
    selections.reset.style.backgroundColor = "hsl(172, 67%, 45%)";   
    if (selections.peopleInput.value === "" || selections.peopleInput.value === "0"){
        selections.totalPer.value = `$${values.total.toFixed(2)}`; 
    } else {
        values.totalPerPerson = values.total / selections.peopleInput.value;
        selections.totalPer.value = `$${values.totalPerPerson.toFixed(2)}`;
    };
};

selections.tip5.addEventListener("click", calculateTip5); 
selections.tip10.addEventListener("click", calculateTip10);
selections.tip15.addEventListener("click", calculateTip15);
selections.tip25.addEventListener("click", calculateTip25);
selections.tip50.addEventListener("click", calculateTip50);
selections.reset.addEventListener("click", resetValues);
selections.customTip.addEventListener("click", changeToInput);
selections.customInput.addEventListener("input", calculateTipCustom); 
selections.peopleInput.addEventListener("input", checkForZero);
selections.billTotal.addEventListener("click", ()=>{
    selections.billTotal.value = ""; 
});
selections.peopleInput.addEventListener("click", ()=>{
    selections.peopleInput.value = ""; 
});

