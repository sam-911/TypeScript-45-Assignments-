let personname :string = '';
personname = prompt('what is your name?') || '';
if(personname !== null && personname !== ''){
    alert(`Hello ${personname}, Would You Like To Learn Some Python Today?`)
}
else{
    alert('You have to fill your name !')
}