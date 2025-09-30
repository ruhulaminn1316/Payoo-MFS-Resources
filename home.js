
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