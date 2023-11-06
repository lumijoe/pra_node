// server.js

const http = require('http');
const PORT = 3001;
const html = require('fs').readFileSync("./index.html");

// webサーバーを作成
const server = http.createServer((req, res) => {
    // ブラウザからアクセスが来た時の処理
    res.writeHead(200, { "Content-Type": "text/html" });
    // res.write("<h1>Hello World</h1>");の代わりにindex.htmlから読み込む方法
    res.write(html);
    res.end();
});

server.listen(PORT, () => {
    console.log("server3001のテスト");
});