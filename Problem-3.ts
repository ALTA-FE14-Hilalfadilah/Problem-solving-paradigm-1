function buySnack(
  money: number,
  snack: string,
  price: number,
  time: number,
  callback: (message: string, remainingMoney: number) => void
) {
  if (money >= price) {
    setTimeout(() => {
      const remainingMoney = money - price;
      const message = `kamu jajan ${snack} dengan harga Rp.${price}\nSisa uang kamu Rp. ${remainingMoney}`;
      callback(message, remainingMoney);
    }, time * 1000);
  } else {
    const message = `Maaf uang kamu belum cukup untuk membeli ${snack}\nSisa uang kamu sebesar ${money}`;
    callback(message, money);
  }
}

const pocketMoney = 10000;

buySnack(pocketMoney, "boba", 5000, 5, (message, remainingMoney) => {
  console.log(message);

  buySnack(remainingMoney, "seblak", 8000, 9, (message) => {
    console.log(message);
  });
});
