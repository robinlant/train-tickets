// Напишіть функцію, яка приймає массив об'єктів 
// і повертає новий массив
// Зробіть знижку 20 % на всі фрукти у масиві 
// Надайте ід для кожного продукту

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
  ];

const addIdAndGiveDiscount = (obj, discount) => {
    const newObj = [];

    obj.forEach((x, i) => {
        x.id = i;
        x.price = x.price * (discount / 100)

        newObj.push(x)
    });

    return newObj;
}

console.log("Надано id та знижку на усы продукты");
console.log(addIdAndGiveDiscount(fruits, 20))