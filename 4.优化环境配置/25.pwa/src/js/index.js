import '../css/index.css';


function sum(...args) {
    return args.reduce((p, c) => p + c, 0);
}


// eslint-disable-next-line
console.log(sum(1,2,3,4));

// 注册serviceworker
// 处理兼容性问题

// eslint不认识window等全局变量，需要修改package.json配置
//     "env": {
//         "browser": true      支持浏览器端全局变量
//     }
// sw代码必须运行在服务器上


if ('serviceWorker' in navigator) {
    window.addEventListener('load',()=>{
        navigator.serviceWorker.register('/service-worker.js')
        .then(() => {
            console.log('sw  success');
        })
        .catch(() => {
            console.log('sw fail');
        })
    })
}