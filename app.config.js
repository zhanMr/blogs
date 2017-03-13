'use strict'
let root = './routes/';
let home =  `${root}home`;
let webapp = `${root}webapp`;
let config = {
    '/': `${webapp}/index`,
    '/myblogs': `${home}/login`
}
module.exports = config;