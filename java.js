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
