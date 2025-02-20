// let fruits=['olma' ,'anor','anjir']
// fruits[0]='behi';
// fruits[6][1]=20;
// fruits.push('gilos');
// fruits.pop()
// fruits.unshift('gilos');
// fruits.shift()
// fruits.splice(2,1);
// fruits.splice(1,0, 'xurmo','behi');
// fruits.splice(0,1,'nok')
// console.log(fruits);

// let arr=[1,2,3,4,5,6,7,8];
// // arr.splice(7, 1 , 20,22)

// console.log(arr[arr.length-1]);
// console.log(arr.at());

// let arr=[3,5,12,15,19,21,20];
// let arr1=[]
// for(let i=arr.length-1; i>=0 ;i--){
//     arr1.push(arr[i])
// }
// console.log(arr1);

// let arr=[1,5,6,3]
// let res=arr.toString();
// console.log(res);
// let str='1,2,3,4,5';
// let arrRes=str.split(',');
// console.log(arrRes);

// for(let element of arr){
//     console.log(element);

// }

// let arr=[1,2,3,4];
// let res=arr.join(', ');
// console.log(res);

// let str='lorem dolor sit amet'
// let arrres=

// let arr1=[1,2,3,4];
// let arr2=[5,6,7];
// let arr3=[8,9];
// // let res=arr1.concat(arr2,arr3)
// let res=[...arr1,...arr2,...arr3]
// console.log(res);

// let users=[
//     {name:"john", age:10},
//     {name:"doe", age:13},
//     {name:"dave", age:7},
//     {name:"alex", age:1},
// ]
// let sum=0;
// for(let user of users){
//     sum=user.age;
//     if(user.age>sum){
//         sum=user.age;
//     }
// }
// console.log(sum);

// 1-Topshiriq
// Massiv uzunligini aniqlash
// Berilgan massivning uzungligi (length) aniqlang va ekranga chiqaring
let arr = [1, 2, 3, 4, 5, "Hello world"];

console.log(arr.length);

// 2-Topshiriq
// Oxiriga element qo‘shish
// Berilgan massivning oxiriga yangi element qo‘shing (push).
let array = ["salom"];
let array1 = "dunyo";
array.push(array1);

console.log(array);

// 3-Topshiriq
// Oxiridan element olib tashlash
// Berilgan massivning oxirgi elementini olib tashlang (pop).
let arr1 = [1, 2, 3, 4, 5, 6];
arr1.pop();
console.log(arr1);

// 4-Topshiriq
// Boshiga element qo‘shish
// Berilgan massivning boshiga yangi element qo‘shing (unshift).
let arr2 = [1, 2, 3, 4, 5];
arr2.unshift(0);
console.log(arr2);

// 5-Topshiriq
// Boshidan element olib tashlash
// Berilgan massivning birinchi elementini olib tashlang (shift).
let arr3 = [1, 2, 3, 4, 5];
arr3.shift();
console.log(arr3);

// 6-Topshiriq
// Massivdagi elementlarni almashtirish
// Berilgan massivning oxirgi elementini o‘chirib, o‘rniga yangi element qo‘shing (pop, push).
let arr4 = [1, 2, 3, 4, 5];
arr4.pop();
arr4.push(55);
console.log(arr4);

// 7-Topshiriq
// Birinchi va oxirgi elementlarni almashtirish
// Berilgan massivning birinchi va oxirgi elementlarini almashtiring (unshift, shift, push, pop).
let arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr5.shift();
arr5.unshift(9);
arr5.pop();
arr5.push(1);
console.log(arr5);

// 8-Topshiriq
// Massivni tozalash
// Berilgan massivni barcha elementlardan tozalang (length = 0).
let arr6 = ["google", "amazon", "apple"];
arr6.length = 0;
console.log(arr6);

// 9-Topshiriq
// Elementni o‘chirib, yangi element qo‘shish
// Massivning 2-indeksidagi elementni o‘chirib, o‘rniga yangi element qo‘shing (splice).
let arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr7.splice(2, 1, 99);
console.log(arr7);

// 10-Tophsiriq
// Ikki massivni birlashtirish
// Ikki berilgan massivni birlashtirib, yangi massiv hosil qiling (concat).
let arr8 = arr5.concat(arr7);
console.log(arr8);

// . Massivda qidirish va manipulyatsiya (splice, at, for, for...of)

// 11-Topshiriq
// Berilgan indeksdagi elementni chiqarish
// Berilgan indeksdagi elementni ekranga chiqaring (at).
let arr9 = ["olma", "anor", "behi"];
console.log(arr9.at(2));

// 12-Topshiriq
// Massivni o‘rtasidan element qo‘shish
// Berilgan massivning o‘rtasiga yangi element qo‘shing (splice).
let array2 = ["javaScript", "Pyhon", "C++", "Kotlin"];
array2.splice(2, 0, "PHP");
console.log(array2);

// 13-Topshiriq
// Element mavjudligini tekshirish
// Berilgan son massivda bor yoki yo‘qligini tekshiring (for).
let numType = ["salom", 1, "uzbekistan", "Tashkent"];
let sonMavjud = false;
for (let i = 0; i < numType.length; i++) {
  if (typeof numType[i] === "number") {
    console.log("Massivda son bor");
    sonMavjud = true;
    break;
  }
}
if (!sonMavjud) {
  console.log("Massivda son yo'q");
}
console.log(numType);

// 14-Topshiriq
// Massiv elementlarini ekranga chiqarish
// Berilgan massiv elementlarini for yordamida ekranga chiqaring.
let massiv = ["Farg'na", "Andijon", "Namangan", "Toshkent", "Sirdaryo"];
for (let i = 0; i < massiv.length; i++) {
  console.log(massiv[i]);
}

// 15-Topshiriq
// Massiv elementlarini ekranga chiqarish (for...of)
// Berilgan massiv elementlarini for...of yordamida ekranga chiqaring.
for (let element of massiv) {
  console.log(element);
}

// 16-Topshriq
// Massivdagi eng katta elementni topish
// Berilgan sonlar massivining eng katta elementini toping (for).
let arrNum = [15, 654, 948, 21, 5, 2165, 456];
let max = arrNum[0];
for (let i = 1; i < arrNum.length; i++) {
  if (max < arrNum[i]) {
    max = arrNum[i];
  }
}
console.log(max);

// 17-Topshiriq
// Massivdagi eng kichik elementni topish
// Berilgan sonlar massivining eng kichik elementini toping (for).
let arrMin = [151, 4864, 65, 198, 165, 54, 61, 41, 89];
let min = arrMin[0];
for (let i = 1; i < arrMin.length; i++) {
  if (arrMin[i] < min) {
    min = arrMin[i];
  }
}
console.log(min);

// 18-Topshiriq
// Juft elementlarni chiqarish
// Massivdagi faqat juft sonlarni ekranga chiqaring (for).
let arrPlus = [
  151, 198, 89, 65, 651, 589, 10, 21, 5, 65, 59, 2, 21, 5, 588, 950, 156,
];

for (let i = 0; i < arrPlus.length; i++) {
  if (arrPlus[i] % 2 == 0) {
    console.log(arrPlus[i]);
  }
}

// 19-Topshiriq
// Toq elementlarni chiqarish
// Massivdagi faqat toq sonlarni ekranga chiqaring (for).

let arrMinus = [16, 65, 8, 5, 32, 56, 21, 165, 26, 53, 56, 51];

for (let i = 0; i < arrMinus.length; i++) {
  if (arrMinus[i] % 2 != 0) {
    console.log(arrMinus[i]);
  }
}

// 20-Topshriq
// Massiv elementlarini yig‘indisini hisoblash
// Berilgan sonlar massivining barcha elementlarini qo‘shing (for).
let arrMult = [156, 15, 48, 62, 3, 2, 65, 89, 54, 87, 15, 5, 36];
let sum = 0;
for (let i = 0; i < arrMult.length; i++) {
  sum += arrMult[i];
}
console.log(sum);

// . Massivni o‘zgartirish va elementlarni ajratish (join, toString, splice)
// 21-Topshiriq
// Massivni string ko‘rinishga keltirish
// Berilgan massivni string ko‘rinishiga o‘tkazing (toString).

let mass = [1, 2, 3, 4, 5];
console.log(mass.toString());

// 22-Topshiriq
// Elementlarni vergul bilan birlashtirish
// Massiv elementlarini vergul bilan ajratilgan ko‘rinishda chiqaring (join).
let mass1 = ["olma", "nok", "tarvuz", "olcha"];
let res = mass1.join(", ");
console.log(res);

// 23-Topshiriq
// Massivning faqat ma’lum qismini olish
// Massivning 3-6 indekslar orasidagi qismini ajrating (splice).
let mass2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
mass2.splice(3, 3);
console.log(mass2);

// 24-Topshiriq
// O‘rtadagi barcha elementlarni o‘chirish
// Berilgan massivning o‘rtasidagi barcha elementlarni o‘chirib tashlang (splice).
let mass3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ind = Math.floor(mass3.length / 2) - 2;
mass3.splice(ind, 4);
console.log(mass3);

// 25-Topshiriq
// Har bir elementga 2 qo‘shish
// Har bir elementga 2 qo‘shib, yangilangan massivni hosil qiling (for).
let massNum = [12, 54, 8, 65, 32, 2, 1, 36, 2552];
for (let i = 0; i < massNum.length; i++) {
  massNum[i] += 2;
}
console.log(massNum);

// 26-Topshiriq
// Musbat va manfiy sonlarni ajratish
// Berilgan sonlar massivida musbat va manfiy sonlarni alohida massivlarga ajrating (for).
let numbers = [12, 15, -8, -95, 92, -39, -18, 72, 38, 68, -52, 41];
let musbat = [];
let manfiy = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    musbat.push(numbers[i]);
  }
  if (numbers[i] < 0) {
    manfiy.push(numbers[i]);
  }
}
console.log(musbat);
console.log(manfiy);

// 27-Topshiriq
// Elementlarni kvadratga oshirish
// Berilgan massivning har bir elementini kvadratga oshiring (for).
let massNum1 = [12, 54, 8, 65, 32, 2, 13, 36, 52];
let sum1 = 1;
for (let i = 0; i < massNum1.length; i++) {
  sum1 = massNum1[i] ** 2;
  console.log(sum1);
}

// 29-Topshiriq
// Teskari tartibda chiqarish
// Massiv elementlarini teskari tartibda ekranga chiqaring (for).
let mass4 = [1, 2, 3, 4, 5];
for (let i = 0; i < mass4.length - 1; i++) {
  console.log(mass4);
}

// 30-Topshiriq
// Elementlarni indeks bilan chiqarish
// Har bir elementni uning indeks raqami bilan ekranga chiqaring (for).
let mass6 = [1, 2, 3, 4, 5];
for (let i = 0; i < mass6.length; i++) {
  console.log(i, mass6[i]);
}

// Qo‘shimcha amaliyotlar (split, concat)

// 31-Topshiriq
// Massivdan faqat musbat elementlarni ajratib olish
// Yangi massiv hosil qilib, faqat musbat elementlarni saqlang (for).
let masMus = [1, 2, -6, -15, 15, 25, 84, 48, -62, -54];
let newMas = [];
for (let i = 0; i < masMus.length; i++) {
  if (masMus[i] > 0) {
    newMas.push(masMus[i]);
  }
}
console.log(newMas);

// 36-Topshiriq
// Ikki massivni ketma-ket birlashtirish
// Ikki massivni birlashtirib, yangi massiv hosil qiling (concat).
let mas1 = ["hello world"];
let mas2 = ["bye world"];
let res1 = mas1.concat(...mas2);
console.log(res1);

// 37-Topshiriq
// Har bir elementni ikkiga bo‘lish
// Har bir elementni 2 ga bo‘lib, natijani yangi massivga yozing (for).
let mas3 = [12, 32, 65, 99, 54, 21, 51];
let mas4 = [];
for (let i = 0; i < mas3.length; i++) {
  mas4.push(mas3[i] / 2);
}
console.log(mas4);

// 40-Topshiriq
// Massiv elementlarini satrga aylantirib, bo‘sh joy bilan ajratish
// Massiv elementlarini bo‘sh joy bilan ajratilgan holda stringga o‘tkazing (join).
let numberString = [1, 2, 3, 4, 5];
let res4 = numberString.join("  ");
console.log(res4);
