let imiona: string[] = ["ala", "zosia", "piotrek", "mikolaj"];

let nazwisko: string[] = new Array("gruca", "majnekrzak");

console.log(`Nazywam sie ${imiona[0]} ${nazwisko[0]}`);

console.log(`hej` + imiona[2]);

for (let element of imiona) {
    console.log(element);
}

console.log(nazwisko.forEach);
//zad1 zwroc dlugosc tablicy
console.log(imiona.length);

let owoce: string[] = ["banan", "arbuz", "gruszka"];

console.log(owoce.sort());

let owoc:string = "ananas";
owoce.push(owoc);

console.log(owoce.shift());
console.log(owoce);
console.log(owoce.pop());
console.log(owoce);

owoce.unshift();
console.log(owoce);
console.log(owoce.reverse());

let tablica1: string[] = ["1", "3", "5", "7"];
let tablica2: string[] = ["2", "4", "6", "8"];
console.log(tablica1.concat(tablica2));

let imiona2: string[] = [...tablica1, ...tablica2];
console.log(imiona2);

let polaczenie: [string, number, string] = ["costam", 3, "costam"];

enum kolory{
    czerwony,
    niebieski,
    zolty,
    zielony
}

let niebieskiwartosc = kolory.niebieski;
let niebieski = kolory[2];
console.log(`ndksndksandk ${niebieski} djfndsjfjsnfjd ${niebieskiwartosc}`);

