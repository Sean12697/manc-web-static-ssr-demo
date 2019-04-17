let fs = require('fs'),
    shell = require('shelljs'),
    data = require('./data.js'),
    indexLayout = require('./_layouts/index.js'),
    itemLayout = require('./_layouts/item.js');

shell.mkdir('-p', './_site');

let itemsList = Object.keys(data).reduce((pre, curr) => pre += `<li><a href="${curr}.html">${data[curr].heading}</a></li>`, "");
fs.writeFileSync('./_site/index.html', indexLayout('My Test', itemsList), () => {});

Object.keys(data).forEach(i => {
    fs.writeFileSync(`./_site/${i}.html`, itemLayout(data[i].heading, data[i].content), () => {});
});