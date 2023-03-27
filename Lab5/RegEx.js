const input = "dsf xxx xxx xxx sd";
const output = input.replace(/\b(\w+)\b(\s+\1)+/, "$1");
console.log(output);


const email = 'example@gmail.com';
const regex = /\b[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
if (regex.test(email)) {
  console.log('Адреса електронної пошти валідна');
} else {
  console.log('Адреса електронної пошти невалідна');
}