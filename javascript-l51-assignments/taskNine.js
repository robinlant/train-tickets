// Поверніть об'єкт, в якому вказано кількість тегів.
// Очікуваний результат
// {js: 3, nodejs: 3, html: 2, css: 2, react: 2}
 
const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs","react"] },
];

const getTagsArray = (tweets) => {
    const array = [];

    tweets.forEach((x, i) => {
        array.push(...x.tags);
    })

    return array;
}

const countStrings = (array) => {
    const map = new Map();

    array.forEach((x, i) => {
        if(map.has(x)) {
            map.set(x, map.get(x) + 1);
        } else {
            map.set(x, 1)
        }

        return map;
    })

    return Object.fromEntries(map);
}

console.log(countStrings(getTagsArray(tweets)));