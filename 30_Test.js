const userName = ["admin", "bugs bunny", "Daffy Duck", "Sylverster", "Tweety"];
for (let i = 0; i < userName.length; i++) {
    if (userName[i] === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userName[i]}, thank you for logging in again.`);
    }
}
// array 
const userNames = ["admin", "bugs bunny", "Daffy Duck", "Sylverster", "Tweety"];
userNames.forEach(userNamee => {
    if (userNamee === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${userNamee}, thank you for logging in again.`);
    }
});
export {};
