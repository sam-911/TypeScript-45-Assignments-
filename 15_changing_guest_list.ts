let Guest_List :string[] = [
    'Shoaib AKhter',
    'Waseem Akram',
    'Imran Khan'
];
for(let i=0; i<Guest_List.length; i++){
    console.log('Dear Mr. ' + Guest_List[i] + ',\nIt is our pleasure to invite you in our party.\nThank You!\n')
}
let absent_Guest :string ='Shoaib AKhter' ;
let new_Guest :string ='Kamran Tessori' ;
Guest_List[0] = new_Guest ;
for(let i=0; i<Guest_List.length; i++){
    console.log("Dear Mr. " + Guest_List[i] + ',\nIt is our pleasure to invite you in our party.\nThank Your!\n')
}
console.log(`Mr. ${absent_Guest} is not comming to the party.`)

export{}