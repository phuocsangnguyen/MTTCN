// const handle = async () => {
//     return Promise.resolve('hello')
// }

// handle().then((res)=> {
//     console.log(res)
// })

// const handle1 = () => {
//     return Promise.resolve('hello')
// }

// handle1()
//     .then((res) =>{
//     return res + ' world'
// })
//     .then((res) => {
//         console.log(res)
//     })

// const handle2 = async () => {
//     return Promise.resolve('hello') 
// }
// const handle4 = (value) => {
//     return Promise.resolve('handle4 '+ value)
// }
// handle2()
//     .then(res => {
//         return handle4(res)
//     })
//     .then((res) => {
//         console.log(res)
//     })

const handle2 = () => {
    return Promise.resolve(true)
}
handle2()
    .then((res) => {
        throw new Error('error')
    })
    .catch((e) => {
        console.log('Chắc chắn sẽ nhảy vào đây')
    })
    .then((v) => {
        console.log('Nhảy vào đây vì trước đó đã catch, và giá trị v là undefined vì trong catch không return gì cả')
    })
        