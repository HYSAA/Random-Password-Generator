let btn= document.getElementsByClassName("button-el")
let random=document.getElementsByClassName("random-el")
let random2=document.getElementsByClassName("random1-el")
let result;
let password=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



function fight(){
    let index1= Math.floor(Math.random()*26)
    let index2= Math.floor(Math.random()*26)
    let fighters1= password[index1]
    let fighters2= password[index2]
    return [fighters1,fighters2]
 }
let secondRandom = () =>{
}

let clickButton= () =>{
    let result=fight()
    random.textContent=result[0] 
    console.log(result)
}
