import { nandaData } from "./1.js";

let select = ["شلی و برگشت زبان", "تاکی پنه",'ادم ریه'];

let filter = nandaData.findIndex((m) => m[1][0].find((q) => q == "تنفسی"));
console.log(filter);

let index = [];
for (let i = 0; i < nandaData.length; i++) {
  let Respiratory = nandaData[i][1][0].find((q) => select.find((w) => w === q));
  let qq = [];

  for (let x = 0; x < nandaData[i][1][0].length; x++) {
    if (select.find((r) => r === nandaData[i][1][0][x])) {
      qq.push(5);
    }
  }
  if (Respiratory) index.push({name:nandaData[i][0],length:qq.length,index: i });
}

console.log(index);

[
  "تنفسی",
  "شلی و برگشت زبان",
  "صدا های غیر طبیعی تنفس",
  "تاکی پنه",
  "سرفه ",
  "دیسپنه",
];
