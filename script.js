// Задача 1. Вывести в консоли:
// а) все ноутбуки
// б) все ноутбуки, цена которых больше 40000
// в) Посчитать сумму цен всех ноутбуков.

// let laptops = [
//     {
//         mark : "Acer",
//         price : 25000
//     },
//     {
//         mark : "Apple",
//         price : 37000
//     },
//     {
//         mark : "Asus",
//         price : 125500,
//     },
//     {
//         mark : "HP",
//         price : 42000
//     },
//     {
//         mark : "Samsung",
//         price : 52000
//     }
// ]

// let sum = 0

// for (i = 0; i < laptops.length; i++) {
//     if (laptops[i].price > 40000) {
//         console.log(`
//         <p>mark: ${laptops[i].mark}</p>
//         <p>price: ${laptops[i].price}</p>
//     `)};
//     sum += laptops[i].price
// }
// console.log(`total: ${sum}`);


// Задача.2
// а) Вывести все ноутбуки, у которых есть категория "laptop"
// б) Вывести все ноутбуки, у которых категория "premium"
// в) Вывести все ноутбуки, у которых категория "tech"


// let laptopsSecond = [
//   {
//     mark: "Acer",
//     category: ["laptop", "tech"],
//     price: 25000,
//   },
//   {
//     mark: "Apple",
//     category: ["notebook", "tech"],
//     price: 37000,
//   },
//   {
//     mark: "Asus",
//     category: ["computer", "premium"],
//     price: 125500,
//   },
//   {
//     mark: "HP",
//     category: ["computer", "tech"],
//     price: 42000,
//   },
//   {
//     mark: "Samsung",
//     category: ["notebook", "premium"],
//     price: 52000,
//   },
// ];

// console.log("laptop");
// for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let a = 0; a < laptopsSecond[i].category.length; a++) {
//         if (laptopsSecond[i].category[a] == "laptop") {
//             console.log(`
//                 <div class="laptops">
//                     <h1> laptop </h1>
//                     <p>mark: ${laptopsSecond[i].mark}</p>
//                     <p>category:  ${laptopsSecond[i].category}</p>
//                     <p>price:  ${laptopsSecond[i].price}</p>
//                 </div>
//             `)
//         }
//     }

// }
// console.log("premium");
// for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let a = 0; a < laptopsSecond[i].category.length; a++) {
//         if (laptopsSecond[i].category[a] == "premium") {
//             console.log(`
//                 <div class="laptops">
//                     <h1> laptop </h1>
//                     <p>mark: ${laptopsSecond[i].mark}</p>
//                     <p>category:  ${laptopsSecond[i].category}</p>
//                     <p>price:  ${laptopsSecond[i].price}</p>
//                 </div>
//             `)
//         }
//     }
// }
// console.log("tech");
// for (let i = 0; i < laptopsSecond.length; i++) {
//     for (let a = 0; a < laptopsSecond[i].category.length; a++) {
//         if (laptopsSecond[i].category[a] == "tech") {
//             console.log(`
//                 <div class="laptops">
//                     <h1> laptop </h1>
//                     <p>mark: ${laptopsSecond[i].mark}</p>
//                     <p>category:  ${laptopsSecond[i].category}</p>
//                     <p>price:  ${laptopsSecond[i].price}</p>
//                 </div>
//             `)
//         }
//     }

// }
// Задача 3.
// Запрашивать у пользователя Марку и Цену ноутбука три раза.
// Марку и цену ноутбука объединять в объект и добавлять(push) в массив laptops=[]-пустой
// Итого будет массив из трех объектов.

// let laptops_three = []
// for (let i = 0; i < 3; i++) {
//     mark1 = prompt("введи марку ноутбука")
//     price1 = +prompt("введи цену ноутбука")
//     laptops_three.push({mark : mark1, price : price1})
// }
// console.log(laptops_three)

// Задача 4.
// У пользователя с prompta запрашивать марку/цену. 
// По его ответу в консоли ввыводить ноутбуки с разметкой.
// Какую марку вы бы хотели? -Acer. Выводим хар-ки ACer
// На какую цену вы рассчитываете? -50000. Выводить все ноутбуки, которые удовл-т(меньше) этой цене

// let laptopsSecond1 = [
//   {
//     mark: "Acer",
//     category: ["laptop", "tech"],
//     price: 25000,
//   },
//   {
//     mark: "Apple",
//     category: ["notebook", "tech"],
//     price: 37000,
//   },
//   {
//     mark: "Asus",
//     category: ["computer", "premium"],
//     price: 125500,
//   },
//   {
//     mark: "HP",
//     category: ["computer", "tech"],
//     price: 42000,
//   },
//   {
//     mark: "Samsung",
//     category: ["notebook", "premium"],
//     price: 52000,
//   },
// ];

// let mark = prompt("Введите Марку");

// for (let i = 0; i < laptopsSecond1.length; i++) {
//     if(laptopsSecond1[i].mark == mark) {
    
//     console.log(`
//         <div class="laptopsSecond1">
//             <h1>${laptopsSecond1[i].mark}</h1>
//             <p>${laptopsSecond1[i].category}</p>                
//             <p>${laptopsSecond1[i].price}</p>

//         </div>  
        
//         `)
//     };}


// let price = +prompt("Введите цену"); 

// for (let i = 0; i < laptopsSecond1.length; i++) {

//     if(laptopsSecond1[i].price <= price) {
    
//         console.log(`
//             <div class="laptopsSecond1">
//                 <h1>${laptopsSecond1[i].mark}</h1>
//                 <p>${laptopsSecond1[i].category}</p>                
//                 <p>${laptopsSecond1[i].price}</p>
    
//             </div>  
            
//             `)
//         };
// }