function inputbalance(balane) {
    const takeDiposit = document.getElementById(balane);
    const depositeBalance = takeDiposit.value;
    const depositeAmount = parseFloat(depositeBalance);
    takeDiposit.value = "";
    return depositeAmount;
}
function takaPush(taka,totaldpo) {
    const pushValue = document.getElementById(totaldpo);
    const depogitvalue = pushValue.innerText;
    const amount = parseFloat(depogitvalue);
    const totalAmout = amount + taka;
    pushValue.innerText = totalAmout;
}
document.getElementById("dipogitbtn").addEventListener("click", function () { 
    const totalmoney = document.getElementById("netbalance")
    const moneyAmount = totalmoney.innerText
    const money=parseFloat(moneyAmount);
    const taka = inputbalance("depositeadder")
    const totalAmount = money + taka;
    totalmoney.innerText = totalAmount;
    takaPush(taka, "depositdepo");
})
document.getElementById("withdrawbtn").addEventListener("click", function () {
    const totalmoney = document.getElementById("netbalance")
    const moneyAmount = totalmoney.innerText
    const money=parseFloat(moneyAmount);
    const taka = inputbalance("withdrawladder")
    if (money>=taka) {
        const totalAmount = money -taka;
        totalmoney.innerText = totalAmount;
        takaPush(taka, "withdrawdipo");   
    }else if(money<taka) {
        alert("please input number");
        const totalAmount = money -0;
        totalmoney.innerText = totalAmount;
        return 0;  
    }
    const totalAmount = money -taka;
    totalmoney.innerText = totalAmount;
    takaPush(taka, "withdrawdipo");
})



