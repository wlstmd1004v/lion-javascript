/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number
const YEAR = 2023;

console.log(typeof String(YEAR));
console.log(YEAR + ' ')

// undefined, null

let days = null;
console.log(typeof String(null));
console.log(null + '');

let undef = undefined;
console.log(typeof String(undefined));
console.log(undefined + '');

// boolean
let isClicked = true;
console.log(typeof String(isClicked));
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));



// null
let bankbook = null;
console.log(Number(bankbook));


// boolean
let cutie = false;
console.log(Number(cutie));
// string
let num = '250';
console.log(num);

// numeric string
let width = '105.3px';
console.log(Number(width ));

/* 데이터 → 불리언 ---------------------------------------------------------- */

// null, undefined, 0, NaN, ''
// 위에 나열한 것 이외의 것들 

console.log(Boolean(friend));
console.log(Boolean(bankbook));
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(1));
console.log(Boolean(0));

console.log('임시적 형 변환 :' + !false);