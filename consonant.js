let str= "Bangladesh";
let cnt = 0;
for(let i=0; i<str.length; i++){
    let char=str.charAt(i).toLowerCase();
    if(char>='a'  && char<='z' && !'aeiou'.includes(char)){
        cnt++;

    }
}
console.log("Number of consonant:",cnt)