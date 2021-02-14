const max =(array) =>{
    let max = 0
    for(let i = 0; i < array.length; i++){
        if(array[i] > max){
            max = array[i]
        }
    }
    return max
}

console.log(max([ 23 ,34 ,2,55]))
console.log(typeof [ 23 ,34 ,2,55])