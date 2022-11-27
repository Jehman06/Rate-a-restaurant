
// Setting variables (to hold cashier's score) to 0 (ratings start at 0)
let cashier = 0
let c_tot = 0
let c_num = 0

// Setting variables (to hold overall score) to 0 (ratings start at 0)
let overall = 0
let o_tot = 0
let o_num = 0

// Setting variables cashierScore and overallScore from index.html
let cashierScore = document.querySelector("#cashierScore")
let overallScore = document.querySelector("#overallScore")

// Cashier button 1
cashierScore1 = document.querySelector("#cashier-1")
cashierScore1.addEventListener("click", function(){
    c_tot = c_tot + 1
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

// Cashier button 2
cashierScore2 = document.querySelector("#cashier-2")
cashierScore2.addEventListener("click", function(){
    c_tot = c_tot + 2
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

// Cashier button 3
cashierScore3 = document.querySelector("#cashier-3")
cashierScore3.addEventListener("click", function(){
    c_tot = c_tot + 3
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

// Cashier button 4
cashierScore4 = document.querySelector("#cashier-4")
cashierScore4.addEventListener("click", function(){
    c_tot = c_tot + 4
    c_num = c_num + 1
    cashier = c_tot / c_num
    cashierScore.textContent = cashier
})

// Overall button 1
overAllScore1 = document.querySelector("#overall-1")
overAllScore1.addEventListener("click", function(){
    o_tot = o_tot + 1
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

// Overall button 2
overAllScore2 = document.querySelector("#overall-2")
overAllScore2.addEventListener("click", function(){
    o_tot = o_tot + 2
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

// Overall button 3
overAllScore3 = document.querySelector("#overall-3")
overAllScore3.addEventListener("click", function(){
    o_tot = o_tot + 3
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

// Overall button 4
overAllScore4 = document.querySelector("#overall-4")
overAllScore4.addEventListener("click", function(){
    o_tot = o_tot + 4
    o_num = o_num + 1
    overall = o_tot / o_num
    overallScore.textContent = overall
})

let showHide = document.querySelector("#show-hide")
showHide.addEventListener("click", function(){
    let scoresDiv = document.querySelector("#show-scores")

    cashierScore.textContent = cashier
    overallScore.textContent = overall

    let btnText = showHide.textContent
    if(btnText === "Display ratings") {
        scoresDiv.style.display = "block"
        showHide.innerHTML = "Hide ratings"
    }
    else {
        scoresDiv.style.display = "none"
        showHide.innerHTML = "Display ratings"
    }
})
