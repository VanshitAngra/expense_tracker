const balance=document.getElementById("balance");
const money_add=document.getElementById("moneyadd");
const money_sub=document.getElementById("moneysub");
const list=document.getElementById("list");
const form=document.getElementById("form");
const text=document.getElementById('text');
const amount=document.getElementById("amount");

const dummy=[
    {id:1,text:"Income",amount:4000},
    {id:2,text:"book",amount:-20},
    {id:3,text:"grocery",amount:-300},
    {id:4,text:"petrol",amount:1000},
];

let transactions=dummy;

function addTranscation(transactions)
{
    const sign=transactions.amount<0?"-":"+";
    const item=document.createElement("li");

    item.classList.add(
        transactions.amount<0?"his":"plus"
    )
    item.innerHTML=`
    ${transactions.text}<span>${sign}${Math.abs(transactions.amount)}</span>
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
    addTranscation(transactions);
