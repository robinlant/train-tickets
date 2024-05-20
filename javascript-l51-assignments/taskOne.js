// Напишіть наступні функції:
// createProduct(obj, callback) - приймає об'єкт товару без id, а також коллбек. 
// Функція створює об'єкт товару, додаючи йому унікальний ідентифікатор у властивість id 
// та викликає коллбек передаючи йому створений об'єкт.

// logProduct(product) - колббек що приймає об'єкт продукту
// і логуючий його в консоль logTotalPrice(product) - колббек, що приймає об'єкт продукту
// і логіює загальну вартість товару в консоль

const createProduct = (obj, callback) => {
    const uuid = uuidv4();
    obj.id = uuid;
    callback(obj);
    return obj;
}

const logProduct = (product) => {
    console.log(product);
}

const logTotalPrice = (product) => {
    console.log("total price is: " + product.totalPrice);
}

createProduct({name:"Product", totalPrice:1234},(x) => {
    logProduct(x);
    logTotalPrice(x);
});

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, 
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}