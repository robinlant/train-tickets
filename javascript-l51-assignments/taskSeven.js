// Напиши клас Client який створює об'єкт
// з властивостями login email
// Оголоси приватні властивості #login #email,
// доступ до яких зроби через геттер та сеттер login email

class Client {
    #login;
    #email;

    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    get login() {
        return this.#login;
    }

    get email() {
        return this.#email;
    }
}

const client = new Client('robinlant', 'robinlant@gmail.me');
console.log(client.login); 
console.log(client.email); 