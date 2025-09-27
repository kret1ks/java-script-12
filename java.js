// Напиши скрипт, який, для об'єкта user, послідовно:

// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of


const user = {
    name: "Mango",
    age: 20,
    hoby: "reading",
    premium: true,
}

// додає поле mood зі значенням 'happy'
user.mood = "happy";

// замінює значення premium на false
user.premium = false;

const keys = Object.keys(user);

for(const key of keys) {
    console.log(`${key}: ${user[key]}`);
}









// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.



function countProps(obj){
    return Object.keys(obj).length;
}

const users = {
    name: "Max",
    age: 14,
    hoby: "football"
};

console.log(countProps(users));




// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".



const employees = {
    Max: 5,
    Anna: 12,
    John: 8,
    Kate: 15
}



function findBestEmployee(employees){
    let best = "";
    let max = 0;

    for(const name in employees){
        if(employees[name] > max) {
            max = employees[name];
            best = name
        }
    }
    return best;
}

console.log(findBestEmployee(employees));






// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".


function countTotalSalary(employes) {
    let total = 0;
    for(const name in employes){
        total += employes[name]
    }
    return total
}

const employes = {
    Max: 2500,
    Anna: 3000,
    Jonh: 1500,
}
console.log(countTotalSalary(employes));




// Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві.


function getAllPropValues(arr, prop) {
    const values = [];


    for(const obj of arr){
        if(prop in obj){
            values.push(obj[prop])
        }
    }
    return values
}


const baza = [
    {name: "Nazar", age: 14},
    {name: "Ostap", age: 16},
    {name: "Ira", age: 15}
]
console.log(getAllPropValues(baza, "name")); 
console.log(getAllPropValues(baza, "age"));  




// Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).



function calculateTotalPrice(allProdcuts, productName) {
    let number = 0;
    for(const product of allProdcuts){
        if(product.name === productName){
            number += product.price * product.quantity
        }
    }
    return number;
}





const products = [
  { name: "Apple", price: 10, quantity: 5 },
  { name: "Banana", price: 7, quantity: 3 },
  { name: "Apple", price: 10, quantity: 2 }
];
console.log(calculateTotalPrice(products, "Apple"));  
console.log(calculateTotalPrice(products, "Banana")); 
console.log(calculateTotalPrice(products, "Orange")); 
