let fs = require('fs')

let html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

</body>
</html>`

let htmladd = () => {
    fs.writeFile("./index.html",`${html}`, (error) => {
        error ? console.log(error) : null
      })
}
let css = `*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    }
    
    html,body{
        height: 100%;
    }`

let cssadd = () => {
    fs.mkdir('./style', () => { 
        fs.writeFile("./style/style.css",`${css}`, (error) => {
            error ? console.log(error) : null
          })
    })
}

let remove = () => {
    fs.unlink('./style/style.css', () => {})
    fs.rmdir('./style', (error) => {error ? console.log(error) : null})
    fs.unlink('./index.html', () => {})
}
remove()