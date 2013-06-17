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


