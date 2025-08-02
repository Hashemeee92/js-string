let str= "Bangladesh";
let vowl = 0;
for(let i=0; i<str.length; i++){
    let char=str.charAt(i).toLowerCase();
    if(char>='a'  && char<='z' && !'bcdfghjklmnpqrstvwxyz'.includes(char)){
        vowl++;

    }
}
console.log("Number of vowels:",vowl)