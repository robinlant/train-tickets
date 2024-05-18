const escapeHTML = (string) => {
    return string
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
};

// For now i just hardcode data into the function,
// because i cant access file system while code running in the browser 
// and i dont want to setup a backend for this nor using a module bundler
const getLabsData = () => {  
    const lab1 = {
        btnId: "btn-l1",
        isFinished: true,
        components: [
            {
                displayName: "Тема",
                html:
                `<div>
                    <h2>Тема: СТРУКТУРА HTML-ДОКУМЕНТА. ВИБІР ПРЕДМЕТНОЇ ГАЛУЗІ. РОБОТА З ПОСИЛАННЯМИ, ТАБЛИЦЯМИ, ЗОБРАЖЕННЯМИ, СПИСКАМИ в HTML-ДОКУМЕНТІ.</h2>
                </div>`
            },
            {
                displayName: "Мета",
                html:
                `<div>
                    <p><b>Мета:</b>придбати практичні навички роботи з HTML-документом, таблицями,\n
                    зображеннями, посиланнями, списками, формами\n
                    Створити шаблон звітного HTML-документом для відображення\n
                    результатів роботи всіх лабораторних робіт.</p>
                </div>`
            },
            {
                displayName: "Завдання",
                html:
                `<div>
                    <h2>ЗАВДАННЯ</h2>
                
                    <ol>
                        <li>На свій розсуд вибрати любу предметну галузь або частину цієї галузі. Виконати опис бізнес-логіки вашого майбутнього WEB-додатку, а саме описати його функціонал. Опис бізнес-логіки представити у вигляді списку.</li>
                        <li>Розмістити тему та опис бізнес-логіки предметної галузі в Excel-файлі, за наступними посиланнями: <a href="https://docs.google.com/spreadsheets/d/1NelPpiEbygDWmaHRbtM5YSj1aYj8oprqAxDY6BnE7dk/edit#gid=1442244608">Google Sheets</a></li>
                        <li>В Excel-файлі вибрати вкладинку у якій буде розміщена ваша група. Вибравши вашу групу, ввести ваше прізвище ім’я, тему предметної галузі, опис бізнес-логіки предметної галузі.</li>
                        <li>На GitHub створити три репозиторія:
                            <ul>
                                <li>Під ваше резюме</li>
                                <li>Під ваш звітний HTML-документ</li>
                                <li>Під ваш майбутній власний WEB-застосунок</li>
                            </ul>
                        </li>
                        <li>Склонувати три репозиторія на свій комп’ютер у вибрану папку.</li>
                        <li>Виконати всі завдання по Figma, які надаються за наступним посиланням: <a href="https://www.youtube.com/playlist?list=PLzdgHk8HLzxX8kIFbX1Xun_IaLV9JQ1Dm">Figma Tutorial</a></li>
                        <li>Розмістити посилання на ваші створенні макети в лічку викладачу.</li>
                        <li>Завантажити макет оригіналу резюме. Макет знаходиться за посиланням: <a href="https://www.figma.com/file/OGycpwm1QwYIZ0nhIOxMbt/Resume?type=design&amp;node-id=0-1&amp;mode=design&amp;t=bpQDeegaFhIUJjbj-0">Figma Resume Template</a></li>
                        <li>Зробити дублікат макету резюме. Виконати перший крок верстки макету, а саме створення HTML-файлу резюме. Приклад цього файлу надається для зразка, але постаратись спочатку зробити власноруч цей файл.</li>
                        <li>Створення HTML-файлу резюме виконати у склонованому репозиторії. Надати імена всім комітам. Запушити результати на репозиторій на GitHub.</li>
                        <li>В Figma створити макет вашого майбутнього власного WEB-застосунку.</li>
                        <li>У склонованому репозиторії вашого майбутнього власного WEB-застосунку добавити файл index.html головної сторінки вашого додатку. Виконати перший крок верстки макету.</li>
                        <li>Головна сторінка повинна містити семантичні теги: header, main, footer</li>
                        <li>Головна сторінка повинна містити теги на основні елементи:
                            <ul>
                                <li>Заголовок першого рівня (тільки один)</li>
                                <li>Заголовок другого рівня</li>
                                <li>Зображення (або декілька зображень)</li>
                                <li>Таблицю (або декілька таблиць)</li>
                                <li>Списки (нумеровані, маркіровані)</li>
                                <li>Форму</li>
                                <li>Посилання на іншу WEB-сторінку</li>
                                <li>Любий текст</li>
                                <li>Любі елементи на ваш розсуд</li>
                            </ul>
                        </li>
                        <li>До лабораторної роботи №1 у звітному HTML-документу розмістити:</li>
                    </ol>
                </div>`
            },
            {
                displayName: "Предметна галузь",
                html:
                `<div>
                    <img src="src/images/1-1.png">
                </div>`
            },
            {
                displayName: "Макети в фігма",
                html:
                `<div>
                    <p>завдання 1 з уроків з ютубу</p>
                    <img src="src/images/1-2.png">
                    <p>завдання 2 з уроків з ютубу</p>
                    <img src="src/images/1-3.png">
                    <p>завдання 3 з уроків з ютубу</p>
                    <img src="src/images/1-4.png">
                    <p>кинув викладачу макети y лічку</p>
                    <img src="src/images/1-5.png">
                </div>`
            },
            {
                displayName: "HTML макету",
                html:
                `<div>
                <p><a href="https://github.com/robinlant/train-tickets/tree/main/resume">ссилка на гитхаб</a></p>
                        <div class="left">
                        <div class="left-person-img">
                            <img src="images/person.svg">
                        </div>
                        <div class="left-contacts">
                            <h3>Contacts</h3>
                            <p><span>C:</span>+38 888 888 88 88</p>
                            <p><span>E:</span>t.goitinskiy@gmail.com</p>
                        </div>
                        <div class="left-tech">
                            <h3>Tech Skills</h3>
                            <ul>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Git</li>
                                <li>WebPack</li>
                                <li>JavaScript</li>
                                <li>React.js</li>
                                <li>Node.js</li>
                            </ul>
                        </div>
                        <div>
                            <h3>Soft Skills</h3>
                            <ul>
                                <li>Scrum</li>
                                <li>Agile</li>
                                <li>GTD</li>
                                <li>Teamwork</li>
                            </ul>
                        </div>
                    </div>
                    <div class="right">
                        <div class="right-person">
                            <p>Front-End Developer</p>
                            <h1>Taras Goitinskiy</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. </p>
                        </div>
                        <div class="right-projects">
                            <h3>Projects</h3>
                            <div class="right-projects-container">
                                <div class="right-projects-container-left">
                                    <ol>
                                        <li><a href="https://hellen.p.goit.global/">https://hellen.p.goit.global/</a></li>
                                        <li><a href="https://cryptohub.p.goit.global/">https://cryptohub.p.goit.global/</a></li>
                                        <li><a href="https://kidslike.p.goit.global/auth">https://kidslike.p.goit.global/auth</a></li>
                                    </ol>
                                </div>
                                <div class="right-projects-container-right">
                                    <ul>
                                        <li>[ HTML5, CSS3 ]</li>
                                        <li>[ JavaScript ]</li>
                                        <li>[ React.js, Node.js ]</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="right-work">
                            <h3>Work Experience</h3>
                            <div class="right-work-node">
                                <h4>Fron-End Developer <span class="blue-text">Freelance</span></h4>
                                <p class="p-time">September 2019 - up to now   |   Country</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Risus commodo viverra maecenas.</li>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</li>
                                </ul>
                            </div>
                            <div class="right-work-node">
                                <h4>Manager <span class="blue-text">Banderogusak & Co.</span></h4>
                                <p class="p-time">March 2015 - October 2018   |   Country</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod labore et dolore magna aliqua.</li>
                                    <li>Quis ipsum suspendisse ultrices gravida.</li>
                                    <li>Risus commodo viverra maecenas.</li>
                                </ul>
                            </div>
                            <div class="right-work-node">
                                <h4>Manager <span class="blue-text">BestUA Corp.</span></h4>
                                <p class="p-time">June 2014 - February 2015   |   Country</p>
                                <ul>
                                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                    <li>Quis ipsum suspendisse ultrices gravida.</li>
                                    <li>Risus commodo viverra maecenas.</li>
                                </ul>
                            </div>
                        </div>
                        <div class="right-education">
                            <h3>Education</h3>
                            <div class="right-education-node">
                                <h4><span class="blue-text">National University of Management</span></h4>
                                <p>Management</p>
                                <p class="p-time">September 2009 - June 2014   |   Country</p>
                            </div>
                        </div>
                    </div>
                </div>`
            },
            {
                displayName: "Макет Сайту у фігмі",
                html:
                `<div>
                    <img src="src/images/1-6.png">
                </div>`
            },
            {
                displayName: "HTML Сайту",
                html:
                `<div>
                    <p><a href="https://github.com/robinlant/train-tickets/tree/main/webapp/public">Ссілка на гітхаб</a></p>
                    <img src="src/images/1-7.png">
                    <img src="src/images/1-8.png">
                </div>`
            },
            {
                displayName: "Висновок",
                html:
                `<div>
                    <h2> Висновок </h2>
                    <p> Виконуючи цю л.р. я познайомився з мовою розмітки html та програмою фігма,
                    написав html для резюме та для свого веб сайта. Також розробив макет свого веб сайта
                    у фігмі та пройшов по фігмі відео-уроки.</p>
                </div>`
            }
        ]
    };

    const lab2 = {
        btnId: "btn-l2",
        isFinished: true,
        components: [
            {
                displayName: "Тема",
                html:
                `<div>
                    <h2>Тема: КАСКАДНІ ТАБЛИЦІ СТИЛІВ. СЕЛЕКТОРИ .ІДЕНТИФІКАТОРИ. СТИЛЬОВЕ
                    ОФОРМЛЕННЯ ТЕКСТОВИХ ЕЛЕМЕНТІВ В HTML-ДОКУМЕНТАХ.</h2>
                </div>`
            },
            {
                displayName: "Мета",
                html:
                `<div>
                    <p><b>Мета:</b>придбати практичні навички роботи з селекторами, ідентифікаторами,
                    списками, різноманітними властивостями кольору і фону, зовнішними та
                    внутрішними відступами, плаваючими елементами, оформленням текстових
                    елементів</p>
                </div>`
            },
            {
                displayName: "Завдання",
                html:
                `
                <div>
                <ol>
                  <li>У власному WEB-застосунку застосувати селектор тегу (або селекторів тегів), класів, ідентифікаторів. 
                    <ul>
                      <li>HTML-код, CSS-код, який застосовується до визначеного елемента.</li>
                      <li>Зображення, яке буде виводитись у браузері, розмістити у звітному HTML-документі у відповідному пункті «Селектори тегу».</li>
                    </ul>
                  </li>
                  <li>Застосувати селектор класу (або селекторів класів). 
                    <ul>
                      <li>HTML-код, CSS-код, який застосовується до визначеного елемента.</li>
                      <li>Зображення, яке буде виводитись у браузері, розмістити у звітному HTML-документі у відповідному пункті «Селектори класів».</li>
                    </ul>
                  </li>
                  <li>Застосувати селектор ідентифікатора (або селекторів ідентифікаторів).
                    <ul>
                      <li>HTML-код, CSS-код, який застосовується до визначеного елемента.</li>
                      <li>Зображення, яке буде виводитись у браузері, розмістити у звітному HTML-документі у відповідному пункті «Селектори ідентифікаторів».</li>
                    </ul>
                  </li>
                  <li>На свій розсуд застосувати сусідні, дочірні селектори, селектор атрибута та універсальний селектор.</li>
                  <li>Програмні коди даного пункту відобразити у звітному HTML-документі у пункті «Інші селектори».</li>
                  <li>Виконати стильове оформлення текстових елементів: шрифти, контури, фон, колір тексту, CSS-властивості для таблиць, багаторівневих списків, CSS Просунутий.</li>
                  <li>Створити макет в Figma звітного HTML-документа.</li>
                  <li>Виконати перший етап верстки, а саме створення index.html звітного HTML-документа.</li>
                  <li>Виконати стильове оформлення звітного HTML-документа.</li>
                  <li>У звітному HTML-документі відобразити результати лабораторних робіт №1 та №2.</li>
                  <li>Результати запушити у відповідний репозиторій звітного HTML-документа.</li>
                  <li>У класрумі розмістити посилання на живі сторінки репозиторії: резюме, власного WEB-застосунку, звітного HTML-документа.</li>
                  <li>Зробити висновки по роботі №2.</li>
                </ol>
              </div>
                `
            },
            {
                displayName: "CSS Селектори",
                html:
                `
                 <div>
                    <img src="src/images/2-1.png">
                    <img src="src/images/2-2.png">
                 </div>
                `
            },
            {
                displayName: "Селектори Класiв",
                html:
                `
                 <div>
                    <img src="src/images/2-3.png">
                    <img src="src/images/2-4.png">
                 </div>
                `
            },
            {
                displayName: "Селектори Тегiв",
                html:
                `
                 <div>
                    <img src="src/images/2-6.png">
                    <img src="src/images/2-5.png">
                 </div>
                `
            },            {
                displayName: "Iншi Селектори",
                html:
                `
                 <div>
                    <img src="src/images/2-7.png">
                    <img src="src/images/2-8.png">
                    <img src="src/images/2-9.png">
                 </div>
                `
            },
            {
                displayName: "Шрифти",
                html:
                `
                 <div>
                    <img src="src/images/2-10.png">
                    <img src="src/images/2-11.png">
                    <img src="src/images/2-12.png">
                 </div>
                `
            },
            {
                displayName: "Kонтури Та Таблицi",
                html:
                `
                 <div>
                    <img src="src/images/2-13.png">
                    <img src="src/images/2-14.png">
                 </div>
                `
            },
            {
                displayName: "Колiр та Фон",
                html:
                `
                 <div>
                    <img src="src/images/2-15.png">
                    <img src="src/images/2-16.png">
                    <img src="src/images/2-17.png">
                 </div>
                `
            },
            {
                displayName: "CSS Просунутий",
                html:
                `
                 <div>
                    <p>Маска Градiент</p>
                    <img src="src/images/2-18.png">
                    <img src="src/images/2-19.png">
                    <p>Mediq queries</p>
                    <img src="src/images/2-20.png">
                 </div>
                `
            },
            {
                displayName: "Висновок",
                html:
                `
                 <p>
                    Виконуючи лаб роботу я познайомився з каскадною таблицею стилів стилів та використав іі на практиці у своему проекті та звітньому документі
                 <p>
                `
            }
        ]
    };

    const lab3 = {
        btnId: "btn-l3",
        isFinished: true,
        components: [
            {
                displayName: "Головна сторінка сайту",
                html: 
                `
                <div>
                    <img src="src/images/3-1.png">
                    <img src="src/images/3-2.png">
                    <img src="src/images/3-3.png">
                    <img src="src/images/3-4.png">
                </div>
                `
            },
            {
                displayName: "Програмний код",
                html:  escapeHTML(
                `
                <div>
                    <h2>Html</h2> 
                    <code>
                    <title>Train Tickets</title>
                    <link rel="preconnect" href="https://fonts.googleapis.com">
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">
                    <link rel="stylesheet" href="styles/styles.css">
                    <link rel="stylesheet" href="styles/header.css">
                    <link rel="stylesheet" href="styles/main.css">
                    <link rel="stylesheet" href="styles/footer.css">
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1">
                </head>
                <body>
                    <header>
                        <h1>Train Tickets</h1>
                        <div class="btns">
                            <div class="disappearable-768px" id="btn-cart">Cart</div>
                            <div class="disappearable-768px" id="btn-login">Login</div>
                            <div class="disappearable-768px" id="btn-register">Sign Up</div>
                            <div id="btn-menu"><img src="images/menu.svg"></div>
                        </div>
                    </header>
                
                    <main>
                        <div id="section-1" class="section">
                            <div class="h2-container">
                                <h2>Very trusted and very real company for buying and comparing train tickets in Europe</h2>
                            </div>
                            <div class="form-container">
                            <form>
                                <div class="first-1">
                                    <label for="from">From</label>
                                    <input type="text" id="from" placeholder="City or destination">
                                </div>
                                <div class="first-1">
                                    <label for="to">To</label>
                                    <input type="text" id="to" placeholder="City or destination">
                                </div>
                                <div class="first-1">
                                    <label for="date">Date</label>
                                    <input type="date" id="date">
                                </div>
                                
                                <div class="button-wrap"><button type="submit">Search</button></div>
                            </form>
                        </div>
                        </div>
                
                        <div id="section-2" class="section">
                            <h2>About Train Tickets</h2>
                            <p>Embarking on a journey across the breathtaking landscapes of Europe, Fantasia Express Tickets emerges not just as a purveyor of passages but as the very gateway to adventure. Nestled in the heart of Narnia, at the whimsical address of 3rd floor, Edge of Nowhere, our essence weaves through the fabric of reality and fantasy. Unlike any, our foundation in Narnia empowers us with the unique ability to offer tickets to dreams and destinations alike.
                                At Fantasia Express Tickets, we don't merely sell tickets; we curate pathways to the soul of Europe. Our offerings are more than a transaction—they are an invitation to traverse the vast, enchanting expanses of a continent rich with history, culture, and unparalleled beauty. Our selection caters to all, from the youthful wanderer yearning for discovery to the seasoned traveler seeking solace in Europe's serene landscapes, with special courtesies extended to our senior adventurers.
                                Why choose Fantasia Express Tickets? The answer is woven into the tapestry of trust, reliability, and genuine care we extend to each traveler. With us, you're not just buying a ticket; you're unlocking a journey steeped in wonder, guided by a company as real as the magical lands of Narnia we call home. Fantasia Express Tickets—where every ticket is a promise of adventure.</p>
                        </div>
                
                        <div id="section-3" class="section">
                            <div class="age-table-container">
                                <h2>Age table</h2>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Youth</th>
                                            <th>Adult</th>
                                            <th>Senior</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>0 - 25</td>
                                            <td>26 - 59</td>
                                            <td>60 +</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            
                            <div class="bonuses-list-container">
                                <h2>Bonuses for seniors</h2>
                                <ul>
                                    <li>20% off on long trains</li>
                                    <li>15% off on short trains</li>
                                    <li>Free cup of tea</li>
                                </ul>
                            </div>
                        
                            <div class="why-we-list-container">
                                <h2>Why we?</h2>
                                <ol>
                                    <li>We are real</li>
                                    <li>We are trusted</li>
                                    <li>We do have an office</li>
                                </ol>
                            </div>
                        </div>
                        
                    </main>
                    <footer>
                        <div class="border">
                            <div class="footer-links">
                                <div>Contanct Us</div>
                            </div>
                            <div class="copyright"><p>Copyright &copy; 2024 Train Tickets Limited and its affiliated companies. All rights reserved. Train Tickets Limited is registered in Narnia. Company No. 2. Registered address: 3rd floor, Center of Nowhere 11, Narnia</p></div>
                        </div>
                    </footer>
                </body>
                </html>
                    </code>
                </div>
                `)
            },
            {
                displayName: "Головна сторінка сайту",
                html:  
                `
                <div>

                </div>
                `
            },
            {
                displayName: "Головна сторінка сайту",
                html:  
                `
                <div>
                </div>
                `
            },
            {
                displayName: "Головна сторінка сайту",
                html:  
                `
                <div>

                </div>
                `
            },
            {
                displayName: "Головна сторінка сайту",
                html:  
                `
                <div>

                </div>
                `
            },
        ]
    };

    const lab4 = {
        btnId: "btn-l4",
        isFinished: false,
        components: [
            {
                displayName: "",
                html: ``
            }
        ]
    };

    const lab5 = {
        btnId: "btn-l5",
        isFinished: false,
        components: [
            {
                displayName: "",
                html: ``
            }
        ]
    };

    const lab6 = {
        btnId: "btn-l6",
        isFinished: false,
        components: [
            {
                displayName: "",
                html: ``
            }
        ]
    };

    const lab7 = {
        btnId: "btn-l7",
        isFinished: false,
        components: [
            {
                displayName: "",
                html: ``
            }
        ]
    };

    const lab8 = {
        btnId: "btn-l8",
        isFinished: false,
        components: [
            {
                displayName: "",
                html: ``
            }
        ]
    };

    const lab9 = {
        btnId: "btn-l9",
        isFinished: false,
        components: [
            {
                displayName: "",
                html: ``
            }
        ]
    };

    const livePages = {
        btnId: "btn-live",
        isFinished: true,
        components: [
            {
                displayName: "Resume",
                html: `<a href="../resume/index.html" target="_blank">Open in a new tab</a>`
            },
            {
                displayName: "WebApp",
                html: `<a href="../webapp/public/index.html" target="_blank">Open in a new tab</a>`
            },
            {
                displayName: "Flexbox Task 1",
                html: `<a href="../flexbox-simple/index.html" target="_blank">Open in a new tab</a>`
            },
            {
                displayName: "Flexbox Task 2",
                html: `<a href="../flexbox-harder/index.html" target="_blank">Open in a new tab</a>`
            },
            
        ]
    }

    
    return labs = [livePages, lab1, lab2, lab3, lab4, lab5, lab6, lab7, lab8, lab9];
}