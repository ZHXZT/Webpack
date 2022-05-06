console.log("index,js被加载了");

document.getElementById('btn').onclick = function () {

    // 懒加载   当文件需要使用才加载
    // 预加载：webpackPrefetch: true    在使用前加载js文件
    // 正常加载是并行加载  预加载：等其他资源加载完毕再偷偷加载
    import (/* webpackChunkName: 'test',webpackPrefetch: true */'./test').then(({ mul }) =>{
        console.log(mul(4,5));D
    })
}
