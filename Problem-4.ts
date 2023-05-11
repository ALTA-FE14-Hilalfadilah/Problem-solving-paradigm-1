interface promiseType {
  data: string | null;
  message: string;
}

function lottery() {
  return new Promise<promiseType>((resolve, reject) => {
    console.log("undian lotre dimulai...");
    console.log("sedang mengundi nomor anda ...");
    let number = Math.floor(Math.random() * 1000) + 1;
    console.log(number);
    setTimeout(() => {
      if (number >= 200 && number <= 350) {
        resolve({
          data: "Selamat",
          message: "anda mendapatkan hadiah utama berupa mobil",
        });
      } else {
        reject({
          data: "Maaf",
          message: "anda kurang beruntung",
        });
      }
    }, 10000);
  });
}

async function playingLottery() {
  await lottery()
    .then((response) => {
      const message = response.message;
      console.log(message);
    })
    .catch((error) => {
      const message = error.message;
      console.log(message);
    })
    .finally(() => {
      console.log("undian lotre telah berakhir...");
    });
}

playingLottery();
