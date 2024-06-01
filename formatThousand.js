function formatThousand(number){
    if(typeof number === "number"){
        let numStr = number.toString()
        if(numStr.length > 3){
            numStr = numStr.split("")
        for(let i = numStr.length - 3; i >= 0; i-=3){
            numStr.splice(i,0,",")
        }
        numStr = numStr.join("")
        return(numStr)
        }
        else{
            return(numStr)
        }
    }
    else{
        return("The function only works with numbers.")
    }
}

console.log(formatThousand(1000))
