// function waitAndRun(){
//     setTimeout(()=>{
//         console.log('끝');
//     }, 2000);
// }

// waitAndRun();

// function waitAndRun2(){
//     setTimeout(()=>{
//         console.log('1번 콜백 끝');
//         setTimeout(()=>{
//             console.log('2번 콜백 끝');
//             setTimeout(()=>{
//                 console.log('3번 콜백 끝');
//             }, 2000);
//         }, 2000);
//     }, 2000);
// }

// waitAndRun2();

// /**
//  * promise
//  */

// const timeoutPromise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         resolve('완료');
//     }, 2000);
// });

// //setTimeout이 실행된 뒤 resolve를 통해 전달된 매개변수로 then 이하의 함수가 수행된다.
// timeoutPromise.then((res)=>{
//     console.log('---then---');
//     console.log(res);
// })

// const getPromise = (seconds)=> new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('완료');
//     }, seconds*1000);
// });

// getPromise(1).then((res)=>{
//     console.log('---first then---');
//     console.log(res);

//     return getPromise(4);
// }).then((res)=>{
//     console.log('---second then---');
//     console.log(res);

//     return getPromise(4);
// })




const getPromise = (seconds)=> new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('에러');
    }, seconds*1000);
});

getPromise(1).then((res)=>{
    console.log('---first then---');
    console.log(res);

    return getPromise(4);
}).catch((res)=>{
    console.log('---first catch---');
    console.log(res);
}).finally(()=>{//then이 실행되든 catch가 실행되든 무조건 실행
    console.log('---finally---');
})

//가장 오래 걸리는 promise를 기준으로 실행된다.
Promise.all([
    getPromise(1),
    getPromise(4),
    getPromise(2)
]).then((res)=>{
    console.log(res);
});