    function checkEligibility() {
        let age = prompt("Please enter your age:");
        age = Number(age);
        let message;
        if (isNaN(age) || age < 0) {
            message = "The age is invalid if it is a negative number.";
        } else if  (age >= 18) {
            message = "Use are  eligible to vote.";
        } else  {
            message = "Use are  not eligible to vote because the age is less than 18.";
        }    
        document.getElementById("p1").innerText = message;
    }
    