let current_user = ["TaHa", "DaNiYal", "SalMAn", "HaMZaH", "JoRdon"];
let new_users = ["BiLal", "TaHa", "ArSalan", "Zohaib", "HaMZaH",];
new_users.forEach(newUserName => {
    let lowerCase = newUserName.toLowerCase();
    if (current_user.map(c_user => c_user.toLowerCase()).includes(lowerCase)) {
        console.log(`The username ${newUserName} is available. Please write a different username`);
    }
    else {
        console.log(`the username ${newUserName} is not available. ;`);
    }
});
export {};
