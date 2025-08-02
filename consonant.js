let str= "Bangladesh";
let cnt = 0;
for(let i=0; i<str.length; i++){
    let char=str.charAt(i).toLowerCase();
    if(char>='a'  && char<='z' && !'bcdfghjklmnpqrstvwxyz'.includes(char)){
        cnt++;

    }
}
console.log("Number of vowels:",cnt)