window.addEventListener('load', () => {
    
document.getElementById("compute").addEventListener("click", compute);
document.getElementById("principal").addEventListener("change", validate_principal);    

    var years = document.getElementById("years");
    for (let i = 1; i <= 10; i++) {
        var option = document.createElement('option');
        option.value = i;
        option.innerText = i;
        years.appendChild(option);
    }
});

function validate_principal() {
    const principal = document.getElementById("principal");
    const button = document.getElementById("compute");
    if (principal.value <= 0) {
        alert("Enter a positive number");
        principal.value = null;
        principal.focus();
        button.disabled = true;
        return;
    }
    button.disabled = false;
}


function compute() {
    // console.log("got here")
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);


    var result_text = "If you deposit \<mark>" + principal + "\</mark>,\<br>" +
                    "at an interest rate of \<mark>" + rate + "\</mark>,\<br>" +
                    "You will receive an amount of \<mark>" + interest + "\</mark>,\<br>" +
                    "in the year \<mark>" + year + "\</mark>\<br>";
    
    document.getElementById("result").innerHTML = result_text;
}

function updateRate() {
    // console.log("got here")
    var rateval = document.getElementById("rate").value
    // console.log(rateval)
    document.getElementById("rate_val").innerText=rateval+"%"
    
}
        