// 1. Palyginti du skaičius a ir b.Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai);

console.log('----------task-1---------------');

const a = 3;
const b = 1;
console.log(a > b ? 'a daugiau uz b' : a === b ? 'a lygu b' : 'b daugiau uz a');

// 2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10.(5 taškai);

console.log('----------task-2---------------');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10.(5 taškai);

console.log('----------task-3---------------');

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}

// 4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai);
console.log('----------task-4---------------');

for (let i = 1; i <= 5; i++) {
    console.log(Math.floor(Math.random() * 10) + 1);
}

/* 5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti
5.(7 taškai); */
console.log('----------task-5---------------');

let rand = Math.floor(Math.random() * 10) + 1;

while (true) {
    console.log(rand);
    if (rand === 5) break;
    rand = Math.floor(Math.random() * 10) + 1;
}

/* 6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo
reikšmę, NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai); */
console.log('----------task-6---------------');

const newArr = Array(Math.floor(Math.random() * (30 - 20 + 1) + 20)).fill(0).map(a => Math.floor(Math.random() * (30 - 10 + 1) + 10));

let max = newArr[0];
for (let i of newArr) {
    max = max > i ? max : i;
}
console.log(newArr);
console.log(`max value ${max}`);

console.clear();
/* 7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra
   kiekvienos raidės. (7 taškai);
 */

const newArr2 = Array(100).fill(0).map(a => 'ABCD'[Math.floor(Math.random() * 4)]);
console.log(newArr2);

newArr2.reduce((t, c) => newArr2, { 'A': 0, B });
console.log();

/* 8. Parašyti funkciją - lygineSuma.Funkcijos parametrai - du kintamieji.Testų reikalavimai - abu kitamieji turi būti
   arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas). Jei kintamieji skaičiai, grąžinti skaičių
   sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą.Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė
   - grąžinti tekstą, kad suma nelyginė. (10 taškų); */
/* 9. Parašyti funkciją pirminisSkaicius.Funkcija turi vieną kintamąjį.Turi būti patikrinimas, kad kintamasis yra
   skaičius.Funkcija turi grąžinti ar pateiktas skaičius yra pirminis(pirminis skaičius yra tas, kuris dalinasi tik iš
   savęs ir tik iš vieneto be liekanos.)(10 taškų); */
/* 10. Parašyti funkciją telefonoNumeris.Funkcija turi priimti vieną kintamąjį - masyvą.Masyvo elementai - skaičiai,
        ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų); */