"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let Guest_List = [
    'Shoaib AKhter',
    'Waseem Akram',
    'Imran Khan'
];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\nIt is our pleasure to invite you in our party.\nThank You!\n');
}
let absent_Guest = 'Shoaib AKhter';
let new_Guest = 'Javed Miandad';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log("Dear Mr. " + Guest_List[i] + ',\nIt is our pleasure to invite you in our party.\nThank Your!\n');
}
console.log(`Mr. ${absent_Guest} is not comming to the party.\n`);
console.log('Great news about finding the Big Table! Adding three more guests sounds like a wonderful idea.\n');
Guest_List.unshift('Shahid Afridi');
Guest_List.splice(2, 0, "Inzamam-ul-haq");
Guest_List.push('Misbah-ul-Haq');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\nIt is our pleasure to invite you in our party.\nThank You!\n');
}
