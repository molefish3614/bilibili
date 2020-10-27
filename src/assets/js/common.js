export default {
    // sleep:暂停函数，接收一个毫秒参数，多少毫秒后返回一个会立即执行resolve的promise对象，可以配合async、await阻塞队列
    sleep(millisecond) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve()
            }, millisecond)
        })
    }
}