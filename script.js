const balance=document.getElementById("balance");
const money_add=document.getElementById("moneyadd");
const money_sub=document.getElementById("moneysub");
const list=document.getElementById("list");
const form=document.getElementById("form");
const text=document.getElementById('text');
const amount=document.getElementById("amount");


let transactions=[];


//Add transaction
function addTranscations(e) {
    e.preventDefault();
    if (text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please enter Text and Value");
    } else {
        const newTransaction = {
            id: generateId(),
            text: text.value,
            amount: +amount.value,
        };

        transactions.push(newTransaction);
        addTranscation(newTransaction);
        updateValues();
        text.value = "";
        amount.value = "";
    }
}

//generate id
function generateId(){
    return Math.floor(Math.random()*100000000);
}



function addTranscation(transaction) {
    const sign = transaction.amount < 0 ? "-" : "+";
    const item = document.createElement("li");

    item.classList.add(
        transaction.amount < 0 ? "his" : "plus"
    );
    item.innerHTML = `
        ${transaction.text}<span>${sign}${Math.abs(transaction.amount)}</span>
        <button class="delete" onclick="">X</button>
    `;

    list.appendChild(item);
}
//update values
function updateValues()
{
    const amounts=transactions.map(transactions =>transactions.amount);
    const total=amounts.reduce((acc,item)=>(acc +=item),0).toFixed(2);
    const income=amounts.filter(item => item > 0).reduce((acc,item)=>(acc+=item),0).toFixed(2);
    const expense=(
        amounts.filter(item=>item<0).reduce((acc,item)=>(acc+=item),0)*-1
    ).toFixed(2);

    balance.innerText=`Rs${total}`;
    money_add.innerText=`Rs${income}`;
    money_sub.innerText=`Rs${expense}`;
}
//Init App
function Init(){
    list.innerHTML="";
    transactions.forEach(addTranscation);
    updateValues();
}
// addTranscation(transactions);
Init();

form.addEventListener("submit",addTranscations);