// З об'єкту medicines потрібно отримати масив в якому будуть
// лише назви препаратів.
// З масиву потрібно прибрати медикаменти , в яких строк
// зберігання уже пройшов. У новому масиві відсортувати 
// медикаменти у хронологічному порядку.
// Результат вивести у консоль. Застосувати стрілочні функції
// const medicines = {
// Агалгін: new Date("2022-05-01"),
// Ношпа: new Date("2025-07-02"),
// Альфахолін: new Date("2024-12-21"),
// Аспірин: new Date("2022-08-15"),
// Аспаркам: new Date("2024-04-18"),
// };

const medicines = [
    { name: "Агалгін", expirationDate: new Date("2022-05-01") },
    { name: "Ношпа", expirationDate: new Date("2025-07-02") },
    { name: "Альфахолін", expirationDate: new Date("2024-12-21") },
    { name: "Аспірин", expirationDate: new Date("2022-08-15") },
    { name: "Аспаркам", expirationDate: new Date("2024-04-18") }
];

const getValid = (array) => {
    const now = Date.now();
    return array.filter(x => now < x.expirationDate);
}

const sortByExpireDate = (array) => {
    return array.sort((a, b) => a.expirationDate - b.expirationDate);
}

const getArrayWithNames = (array) => {
    return array.map(x => x.name);
}

console.log(getArrayWithNames(sortByExpireDate(getValid(medicines))));