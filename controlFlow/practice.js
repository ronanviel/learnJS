let person = "Member";
let msg;

if (person === "employee") {
    msg = "You can access Dietary Services";
}
else if (person === "Enrolled Member") {
    msg = "You can access Dietary Services, and interact 1-to-1 with dietician";
}
else if (person === "Subscriber") {
    msg = "You have partial access to facilitate Dietary Services";
}
else {
    msg = "You need to enroll or subscribe first";
}

console.log(msg);