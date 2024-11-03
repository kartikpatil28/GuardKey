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

    


    

const password=document.getElementById("Password");
document.getElementById("Submit").addEventListener("click",function(event){
    event.preventDefault();//Added the preventDefault(). I was facing the issue of reloading when i used to click the submit button. The use of this is the HTML elements have default behaviour i.e., when clicked they reload especially the button elements. Thus to prevent those default behaviour we use preventDefault() function
    const passwordInput=password.value
    const result=checkStrength(passwordInput);
    // displayStrength(result);
    document.querySelector(".strength").innerHTML=`<span>Strength is: ${result}</span>`
    console.log(result)
})
// function displayStrength(result){
    
// }