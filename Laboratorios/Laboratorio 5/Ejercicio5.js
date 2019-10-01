function palindrome(x1){
    let flag=true;
    let word=x1.split("");
    let reverseword = x1.split("").reverse();

    for (let i = 0; i < x1.length; i++) {
        if (word[i].toUppercase()!=reverseword[i].toUppercase()) {
            flag=false;
            console.log("nope,no es palindroma");
            break;
        }
        
    }
    if(flag)
    {
        console.log("lo es.")
    }
}

palindrome("palabra");