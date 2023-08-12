
let btn= document.getElementById("button-el")
let random=document.getElementById("random-el")
let random2=document.getElementById("random1-el")
let test=document.getElementById("test-el")
let result="";
let joinedResult=""
let password=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function fight(){
    let index1= Math.floor(Math.random()*26)
    let index2= Math.floor(Math.random()*26)
    let fighters1= password[index1]
    let fighters2= password[index2]
    let data=[]
    for(let i=0;i<10;i++){
        data.push(password[Math.floor(Math.random()* 26 )])
    }
console.log(data)
    return [fighters1,fighters2,data]
 }
// btn.addEventListener('click',function(){
//     let result=fight()//gi call niya ang function na fight()
//     let random = document.getElementById("random-el")
//     for (let i = 0; i < result.length; i++) {
//         let joinedResult=result.join("")
//         //let text = fruits.join(); JOIN SYNTAX
//           random.textContent=joinedResult[i]
//     //   random.textContent = result[i]

// }
// })
btn.addEventListener('click', function() {
    let result = fight();
    // let random = document.getElementById("random-el");
    // for(let i=0;i<result.length;i++)
   let joinedResult = result.join("");
    random.textContent = joinedResult; 
  });