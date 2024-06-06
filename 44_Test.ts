function makeSandwich (item: string []) {
    console.log ("\nMaking Yur sandWich with: ");
    item.forEach(element => console.log ("-" + element));

    console.log ("Enjoy your sandwich !\n");
}
makeSandwich(["Ham", " Cheese", "Lettuce"]);
makeSandwich(["Turkey", "Bacon",]);
makeSandwich(["Peanut", "Butter",]);