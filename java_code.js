function tellFortune(numChildren, partnerName, geo, jobTitle){
    var future = "You will be a " +jobTitle+ " in " +geo+ " and married to " +partnerName+ " with " +numChildren+ " kids.";
    console.log(future)
}
// tellFortune(4, "Monesha", "Shanghai", "CEO")
// tellFortune(2, "Madonna", "Toronto", "playa hata")
// tellFortune(66, "Monica", "Moscow", "2chainz")


function calculateAge(birthYear, currentYear){
    var age = currentYear - birthYear;
    var message = ("You are either " +age+ " or " +(age-1)+ " years old.")
    console.log(message)
}
// calculateAge(1987,2013)


function calculateSupply(age, maxAge, perDay){
    var total = (maxAge-age) * 365 * perDay;
    var message = ("You will need " +total+ " TimTams to last you until the ripe age of " +maxAge+".");
    console.log(message)
}
// calculateSupply(25,200,2)

function greaterNum(num1, num2){
    if (num1 >num2) {
        console.log("The greater number of "+num1+" and " +num2+ " is " +num1+ ".");
    }
    else{
        console.log("The greater number of "+num1+" and " +num2+ " is " +num2+ ".");
    }
}
// greaterNum(5,10)

function helloWorld(lang){
    if (lang=="en"){
        return "Hello world!";
    }
    else if (lang=="es"){
        return "Hola";
    }
    else if (lang=="fr"){
        return "Bonjour";
    }
    else {
        return "Hello world!";
    }
}
// console.log(helloWorld("en"));
// console.log(helloWorld("es"));
// console.log(helloWorld("fr"));
// console.log(helloWorld("poop"));


function assignGrade(score){
    if (score <50){
        return "F"
    }
    else if (score >=50 && score <=59){
        return "D";
    }
    else if (score >=60 && score <=69){
    return "C";
    }
    else if (score >=70 && score <=79){
    return "B";
    }
    else if (score >=80 && score <=100){
    return "A";
    }
}

// console.log(assignGrade(33))
// console.log(assignGrade(55))
// console.log(assignGrade(66))
// console.log(assignGrade(77))
// console.log(assignGrade(99))

// for (var x = 0; x<=20; x=x+1){
//     if ((x % 2 == 0) && (x!=0)){
//         console.log(+x+ " is even")
//     }
//     else if (x % 2 == 1){
//         console.log(+x+ " is odd")
//     }
//     else{
//         console.log(x)
//     }
// }

// var myArray = ["Grilled Cheese", "Chicken","Other fun stuff", "oh and more fun stuff"]
// for (var i=0; i<myArray.length;i++){
//     if (i==0){
//         console.log("my first choice is "+myArray[i]+".")
//     }
//     else if (i==1){
//         console.log("my second choice is "+myArray[i]+".")
//     }
//     else if (i==2){
//         console.log("my third choice is "+myArray[i]+".")
//     }
//     else if (i==3){
//         console.log("my fourth choice is "+myArray[i]+".")
//     }
// }
