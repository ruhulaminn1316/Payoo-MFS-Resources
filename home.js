
// add money feature 
const vaildpin = 1234
document.getElementById("add-money-btn").addEventListener("click", function(e) {
    e.preventDefault()
    console.log("Button clicked")
    const bank = document.getElementById("bank").value
    const accountNumber = document.getElementById("account-number").value
    const addAmount = parseInt(document.getElementById("add-amount").value)
    const pinNumber = parseInt(document.getElementById("pin-Number").value)
    console.log(bank, accountNumber, addAmount, pinNumber)


    
    // accountNumber validation
    if(accountNumber.length !== 11) {
        alert("Account number must be 11 digits")
        return
    }

    // pin validation
    if(pinNumber !== vaildpin) {
        alert("Pin number is incorrect")
        return
    }
    // available balance
    const availableBalanceElement = parseInt(document.getElementById("available-balance").innerText
  )
    const newBalance = availableBalanceElement + addAmount
    document.getElementById("available-balance").innerText = newBalance
}
)

// cash out feature
document.getElementById("withdraw-btn").addEventListener("click", function(e) {
    e.preventDefault()
   
    const withdrawAmount = parseInt(document.getElementById("withdraw-amount").value)

    const availableBalanceElement = parseInt(document.getElementById("available-balance").innerText)

    const newBalance = availableBalanceElement - withdrawAmount

    document.getElementById("available-balance").innerText = newBalance






    const withdrawPinNumber = parseInt(document.getElementById("withdraw-pin-Number").value)
    console.log(withdrawAmount, withdrawPinNumber)
}

// add money and cashout section toggle
document.getElementById("add-button").addEventListener("click", function() {
    document.getElementById("add-money-parent-div").style.display = "block"
    document.getElementById("cashout-parent-div").style.display = "none"
})

// cash out button
document.getElementById("cash-out-button").addEventListener("click", function() {
    document.getElementById("add-money-parent-div").style.display = "none"
    document.getElementById("cashout-parent-div").style.display = "block"
})






