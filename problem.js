let prob= [1,2,3,2,3,1,2,3,2,1,2,3,2,1,2,3,2,2,1,2,3,3,3];
let blue, black, red
//blue(1)
//black(2)
//red(3)
//let bigfish = [blue, black, red]
blue=[]
black= []
red= []
let i, j 

for(i=0; i< prob.length; i++){
    if(prob[i]==1){
        blue.push(prob[i])
    }
    else if(prob[i]==2){
        black.push(prob[i])
    }
    else{
        red.push(prob[i])
    }
}
console.log("Blues")
console.log( blue)
console.log("Blacks")
console.log(black)
console.log("Reds")
console.log(red)
let pairs1= (blue.length/2)
let rem1 = (blue.length%2)
console.log(`the number of  pairs in blue are: ${pairs1} and the remainder is ${rem1}`)

let pairs2= (black.length/2)
let rem2 = (black.length%2)
console.log(`the number of  pairs in blue are: ${pairs2} and the remainder is ${rem2}`)

let pairs3= (red.length/2)
let rem3 = (red.length%2)
console.log(`the number of  pairs in blue are: ${pairs3} and the remainder is ${rem3}`)

