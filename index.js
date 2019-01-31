function takeANumber(katzDeliLine, name){
  var position =katzDeliLine.lenght+1
  katzDeliLine.push(name)
  return "Welcome, "+name+". You are number" +position+" in line." 
}



// var katzDeliLine =[]
//
// function takeANumber(katzDeli, name){
//   line.push(`${name}`)
//   return(`Welcome , ${name}. You are ${katzDeli.lenght} im line.`)
// }
//
// function nowServing(katzDeli){
//   let i =0
//   while(i<katzDeli.length){
//     i++
//   }
//   if(katzDeli.length === 0){
//     return "There is nobody waiting to served!"
//   }
//   else{
//     return(`Currently serving ${katzDeli.shift()}.`)
//   }
//
//
// var line =[]
//
// function currentLine(katzDeli){
//   let i = 0
//   while(i<katzDeli.length){
//     i++
//   }
//   if(katzDeli.length===0){
//     return " there is nobody waiting to be served!"
//   }
//   else{
//     return (`Currently serving ${katzDeli.shift()}.`)
//   }
// }
