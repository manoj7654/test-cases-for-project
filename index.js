// index.js

//  import the crypto module



//  get a commands using process.argv


// complete the  function

const process=require("process")
const cmd=process.argv
const crypto=require("crypto")
// console.log(cmd)
const command=(cmd[2]);
const result1=Number(cmd[3])
const result2=Number(cmd[4]);


if(command=="add"){
  function add(result1,result2){
    return result1+result2
  }
  console.log(add(result1,result2))
}
if(command=="sub"){
  function sub(result1,result2){
    return result1-result2
  }
  console.log(sub(result1,result2))
}
if(command=="mult"){
  function mult(result1,result2){
    return result1*result2
  }
  console.log(mult(result1,result2))
}
if(command=="divide"){
  function divide(result1,result2){
    return result1/result2
  }
  console.log(divide(result1,result2))
}
if(command=="sin"){
  function sin(result1){
    return Math.sin(result1)
  }
  console.log(sin(result1))
}
if(command=="cos"){
  function cos(result1){
    return Math.cos(result1)
  }
  console.log(cos(result1))
}
if(command=="tan"){
  function tan(result1){
    return Math.tan(result1)
  }
  console.log(tan(result1))
}

if(command=="random"){
  let res=crypto.randomBytes(result1,result2)
  // console.log(res)
  // console.log(cmd.length)
  const random=(result1,result2)=>{
    return result1+result2
   }
console.log(random(result1,result2))
}


// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
