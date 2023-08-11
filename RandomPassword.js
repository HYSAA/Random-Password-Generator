// let btn= document.getElementById("button-el")
// let random=document.getElementById("random-el")
// let random2=document.getElementById("random1-el")
// let result;
// let password=["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
// "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];



// function fight(){
//     let index1= Math.floor(Math.random()*26)
//     let index2= Math.floor(Math.random()*26)
//     let fighters1= password[index1]
//     let fighters2= password[index2]
//     return [fighters1,fighters2]
//  }


// // let clickButton= () =>{
// //     let result=fight()
// //     random=result;
// //     random2=result
// //     random.textContent=result[0]
// //     random2.textContent=result[1]
// //     console.log(result)
// // }
// btn.addEventListener('click',function(){
//     let result=fight()
//     random=result;
//     random2=result
    
//     random.textContent=result[0]
//     random2.textContent=result[1]
//     console.log(result)

// })
let btn= document.getElementById("button-el")
let random=document.getElementById("random-el")
let random2=document.getElementById("random1-el")
let test=document.getElementById("test-el")
let result;
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


btn.addEventListener('click',function(){
    let result=fight()
  
    data=result
    // random.textContent=result[0]
    // document.getElementById("random-el").textContent=result[0]

    // random2.textContent=result[0]
    // document.getElementById("random1-el").textContent=result[1]
    
    // for(let i=0;i<data.length;i++)
    // random.textContent=data[i]
    // document.getElementById("test-el").textContent=result[10]
    let random = document.getElementById("random-el");
    // let joinedData=password.join("")
    for (let i = 0; i < data.length; i++) {
        //let text = fruits.join(); JOIN SYNTAX
        // data[i]=password.join("")
      random.textContent = data[i]
    //   =password.join("");
}
})