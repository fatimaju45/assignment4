
function calculateTax(income,expense){
    
    if(income<0 ||expense<0 || expense>income){
        return 'invalid input'
    }
    const savings=(income-expense)
    totalTax =(savings*.20)
    return totalTax
}


function sendNotification(emailAddress){
    if(!emailAddress.includes('@')){
        return 'Invalid Email'
    }
    userName = emailAddress.split('@')[0]
    domainName = emailAddress.split('@')[1]
    
    return userName+' sent you an email from '+ domainName
}

   
function checkDigitsInName(userName){
    if(typeof userName!== 'string'){
        return 'Invalid Input'
    }
    const digits = [0,1,2,3,4,5,6,7,8,9]
    for(digit of digits){
        if(userName.includes(digit)){return true}
    }
    return false
}

function calculateFinalScore(obj){
    if(typeof obj !=='object'){
        return 'Invalid Input'
    }
    let total= obj.testScore+obj.schoolGrade
    let finalScore=0
    if(obj.isFFamily===true){finalScore=total+20}
    if(finalScore>=80){return true}
    else{return false}
    
}

function waitingTime(waitingTimes,serialNumber){
    if(typeof serialNumber!=='number' || !Array.isArray(waitingTimes)){
        return 'Invalid Input'
    }
    let sum=0
    for(time of waitingTimes){
        sum=sum+time
    }
    let average= Math.round(sum/waitingTimes.length)
    let finalTime= ((serialNumber-1)-waitingTimes.length)*average
    return finalTime
}

