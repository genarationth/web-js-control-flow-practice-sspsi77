// const password = 'pass$word';
// if(password.length >=12){
// console.log('password is very strong so WWLCOME!!!');
// }else if(password.length >= 8){
// console.log('WELCOME!!!');
// }else{
// console.log('SORRY!!! the password is too short');
// }


const password = 'pass$word';
password.length >= 12 ? console.log('password is very strong so WWLCOME!!!'): ( 
    password.length >= 8 ? console.log('WELCOME!!!'):console.log('SORRY!!! the password is too short')
    );
