let yourname :string = '';

yourname = prompt('what is your name') || '';

let lowercase :string = yourname.toLowerCase() ;
let UpperCase :string = yourname.toUpperCase() ;
let titlecase :string = yourname.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')

if(yourname !== null && yourname !== ''){
    alert(`Hello ${yourname}, Here are your name in:
LowerCase: ${lowercase}
UpperCase: ${UpperCase}
TitleCase: ${titlecase}`)
}
else{
    alert('please fill your name !')
};