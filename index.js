const fs = require('fs');

// Read and write file's using fs
/**
 |--------------------------------------------------
 |  Lecture # 6 Blocking Code
 |--------------------------------------------------
 */
// Blocking Code
// const textfile = fs.readFile("./txt/input.txt", "UTF-8", (err, data) => {
//     if (!!data) console.log(data)
//     // console.log(data)
// })
// console.log("File is reading")
// const newText = `This is what we know about.\n Created at ${Date.now()} ${textfile}`
// fs.writeFileSync("./txt/output.txt", newText)


/**
 |--------------------------------------------------
 | Lecture # 7 Non-blocking Code to write or read the file
 |--------------------------------------------------
 */
//Note: Not using the fs.readFileSync because this is synchronous function
//
// fs.readFile("./txt/startddddd.txt", "utf-8", (err, data) => {
//     if(err) return console.error("Error Start file not found ")
//     fs.readFile(`./txt/${data}.txt`, 'utf-8', (err, data2) => {
//         fs.readFile(`./txt/append.txt`, 'utf-8', (err,data3)=>{
//             fs.writeFile(`./txt/final.txt`, `${data2}\n${data3}`, 'utf-8', (err, data3) => {
//                 console.log("File Successfully Updated")
//             })
//         })
//     })
// })
// console.log("Always run first because it has no callBack ")


/**
 |--------------------------------------------------
 | Lecture # 8 Create Simple Server
 |--------------------------------------------------
 */
// const http = require('http')
// const server = http.createServer((req, res) => {
//     res.end("Using all Parameter in listen ")
// });
// server.listen(8000, "127.0.0.1", () => {
//  console.log('Server is running on port number 8000')
// })


/**
 |--------------------------------------------------
 | Lecture # 9 Routing
 |--------------------------------------------------
 */
// Note: The createServer method has a callback function which give has a req parameter which has a bunch of properties  using the url module we can get the url object form it and also
// check the user live server url and make some decisions

// const http = require('http')
// // const url = require('url')
// const server = http.createServer((req, res) => {
//     const pathName = req.url;
//     switch (pathName) {
//         case '/overview': {
//             return res.end("We have no overview")
//         }
//         case '/product': {
//             return res.end("New Product Arrived")
//         }
//         case '/data': {
//             const data = [{
//                 user: "Sales",
//                 id: Date.now(),
//                 active: true
//             },
//                 {
//                     user: "Tokyo",
//                     id: Date.now(),
//                     active: true,
//                     live: "ok"
//                 },
//                 {
//                     user: "john",
//                     id: Date.now(),
//                     active: true,
//                     status: "death"
//                 },
//                 {
//                     user: "Doe",
//                     id: Date.now(),
//                     active: false,
//                     nationalId: 3444444
//                 }, {
//                     user: "Death",
//                     id: Date.now(),
//                     active: false
//                 },]
//             const responseData = JSON.stringify(data)
//             res.setHeader('Content-Type', 'application/json')
//             res.writeHead(200, responseData)
//             // res.write(responseData)
//             res.end(responseData);
//             break;
//         }
//         case '/by': {
//             return res.end("by")
//         }
//         default:
//             res.writeHead(404, {
//                 'Content-Type': 'text/html',
//                 'meta-data': 'check the new content type with utf-8',
//             })
//             res.write('<h1>Oops! Page not found</h1>')
//             res.end()
//     }
// })
// server.listen(8080, "127.0.0.1", () => {
//     console.log("Serve is running on port number 8080")
// })


/**
 |--------------------------------------------------
 | Lecture # 10 Create simple web API
 |--------------------------------------------------
 */
// const http = require('http')
// // const url = require('url')
// const server = http.createServer((req, res) => {
//     const pathName = req.url;
//     switch (pathName) {
//         case '/overview': {
//             return res.end("We have no overview")
//         }
//         case '/product': {
//             return res.end("New Product Arrived")
//         }
//         // case '/data': {
//         //     const data = [{
//         //         user: "Sales",
//         //         id: Date.now(),
//         //         active: true
//         //     },
//         //         {
//         //             user: "Tokyo",
//         //             id: Date.now(),
//         //             active: true,
//         //             live: "ok"
//         //         },
//         //         {
//         //             user: "john",
//         //             id: Date.now(),
//         //             active: true,
//         //             status: "death"
//         //         },
//         //         {
//         //             user: "Doe",
//         //             id: Date.now(),
//         //             active: false,
//         //             nationalId: 3444444
//         //         }, {
//         //             user: "Death",
//         //             id: Date.now(),
//         //             active: false
//         //         },]
//         //     const responseData = JSON.stringify(data)
//         //     res.setHeader('Content-Type', 'application/json')
//         //     res.writeHead(200, responseData)
//         //     res.end(responseData);
//         //     break;
//         // }
//         case '/api': {
//             return fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, dataAPi)=>{
//                 res.writeHead(200, `{Content-Type: application/json}`)
//                 res.end(dataAPi)
//             })
//         }
//         default:
//             res.writeHead(404, {
//                 'Content-Type': 'text/html',
//                 'meta-data': 'check the new content type with utf-8',
//             })
//             res.write('<h1>Oops! Page not found</h1>')
//             res.end()
//     }
// })
// server.listen(8090, "127.0.0.1", () => {
//     console.log("Serve is running on port number 8090")
// })


/**
 |--------------------------------------------------
 | Lecture # 11 Html Template Building Template
 |--------------------------------------------------
 */

// You are confuse why we use the blocking code below instead of non-blocking we use the multiple if statement or switch statement
// we first read the file for the first time when the user start the server anf give them response on difference routes instead of call files of specific routes one by one
//which makes the api to slow them user change url then we call file which is bad practice

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, 'utf-8');
const tempCards = fs.readFileSync(`${__dirname}/templates/template-cards.html`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, 'utf-8');


const tempData = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
// JSON. parse() transforms JSON strings back into JavaScript objects or values, enabling easy access and manipulation of the data.
const dataObj = JSON.parse(tempData);
console.log(dataObj)

const http = require('http');
// http.createServer((req, res) => {
//     fs.readFile(`${__dirname}/templates/overview.html`, "utf-8", (err, data) => {
//         res.end(data);
//     })
// }).listen(9090)
const replaceTemplate = (temp, product) => {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName)
    output = output.replace(/{%IMAGE%}/g, product.image)
    output = output.replace(/{%QUANTITY%}/g, product.quantity)
    output = output.replace(/{%NUTRITION%}/g, product.nutrients)
    output = output.replace(/{%PRICE%}/g, product.price)
    output = output.replace(/{%FROM%}/g, product.from)
    output = output.replace(/{%DESCRIPTION%}/g, product.description)
    output = output.replace(/{%ID%}/g, product.id)
    if (!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, `not-organic`)
    return output

}
const url = require('url')
const server = http.createServer((req, res) => {

    // Note: the true mean to parse the string into object, but we need to convert the string id into object using true pass the second argument.
    const {query, pathname} = url.parse(req.url, true)
    switch (pathname) {
        case "/overview" : {
            res.writeHead(200, {"Content-Type": "text/html"})
            const cardsHtml = dataObj.map(el => replaceTemplate(tempCards, el)).join('')
            const output = tempOverview.replace(/{%PRODUCT_CARDS%}/g, cardsHtml)
            res.end(output)
            break;
        }
        case "/product" : {
            res.writeHead(200, {"Content-Type": "text/html"})
            const product = dataObj[query.id]
            const output = replaceTemplate(tempProduct, product)
            res.end(output)
            break;
        }
        case "/cards" : {
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(tempCards)
            break;
        }
        default :
            res.end("<h1>Oops ! Page not Found</h1>")
    }

})
server.listen(9090, '127.0.0.1', () => {
    console.log(`Template page in run on port 9090`)
})

















