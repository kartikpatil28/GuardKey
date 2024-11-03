function checkStrength(password){
    let strength=0
    if(password>0)strength++;
    if(/[a-z]/.test(password))strength++;
    if(/[A-Z]/.test(password))strength++;
    if(/[0-9]/.test(password))strength++;
    if(/[/W_]/.test(password))strength++;


    switch (strength) {
        case 0: return "Type Something"
        case 1: return "Very Weak";
        case 2: return "Weak";
        case 3: return "Moderate";
        case 4: return "Strong";
        case 5: return "Very Strong";
        default: return "Invalid";
    }
}
function displayStrength(result){
    document.getElementById("strength").innerHTML=`<span>${result}</span>`
}
    


    

const password=document.getElementById("Password");
document.getElementById("Submit").addEventListener("submit",function(){
    const result=checkStrength(password);
    displayStrength(result);
})