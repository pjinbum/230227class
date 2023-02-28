// function buy(item, price, quantity) {
//   console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
//   console.log("계산이 필요합니다.");
//   setTimeout(function () {
//     const total = price * quantity;
//     return total;
//   }, 1000);
// }

// function pay(total) {
//   console.log(total + "원을 지불하였습니다.");
// }
// const tot = buy("고구마", 1000, 5);
// pay(tot);

// pay(buy("고구마", 1000, 5));

// 쳇 gpt

function buy(item, price, quantity) {
  console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
  console.log("계산이 필요합니다.");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const total = price * quantity;
      resolve(total);
    }, 1000);
  });
}

function pay(total) {
  console.log(total + "원을 지불하였습니다.");
}

buy("고구마", 1000, 5)
  .then((total) => {
    pay(total);
  })
  .catch((error) => {
    console.error(error);
  });

// promise(할일(resolve, reject))
//it(true) {
//resolve('성공');
//}else {
//reject('실패');

//mypromise,then().catch()
// resolve를 부르면 then이 실행
// reject를 부르면 catch가 실행

// ------------------------------------------------------------------------------

//   function buy(item, price, quantity, 콜백함수) {
//   console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
//   console.log("계산이 필요합니다.");
//   setTimeout(function () {
//     const total = price * quantity;
//     콜백함수(total)
//   }, 1000);
// }

// function pay(total) {
//   console.log(total + "원을 지불하였습니다.");
// }
// const tot = buy("고구마", 1000, 5 , pay);
// pay(tot);

// pay(buy("고구마", 1000, 5 , pay));
