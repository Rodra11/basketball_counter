//SCOREBOARD

document.getElementById ("home-score-btn-1") 
document.getElementById ("home-score-btn-2") 
document.getElementById ("home-score-btn-3") 

document.getElementById ("guest-score-btn-1") 
document.getElementById ("guest-score-btn-2") 
document.getElementById ("guest-score-btn-3") 

let homeScoreEl = document.getElementById("home_score")
let guestScoreEl = document.getElementById("guest_score")

let homeScore = 0
let guestScore = 0

function increaseHomeScoreOne (){
    homeScore += 1
    homeScoreEl.textContent = homeScore
    }
function increaseHomeScoreTwo (){
    homeScore += 2
    homeScoreEl.textContent = homeScore
    }
function increaseHomeScoreThree (){
    homeScore += 3
    homeScoreEl.textContent = homeScore
    }
function increaseGuestScoreOne (){
    guestScore += 1
    guestScoreEl.textContent = guestScore
    }
function increaseGuestScoreTwo (){
    guestScore += 2
    guestScoreEl.textContent = guestScore
    }
function increaseGuestScoreThree (){
    guestScore += 3
    guestScoreEl.textContent = guestScore
    }
    