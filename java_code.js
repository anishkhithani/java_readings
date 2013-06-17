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
