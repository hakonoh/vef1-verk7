/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir samhljóðar */
const CONSONANTS = 'bcdfghjklmnpqrstvwxz'.split('');

/** Íslenskir sérhljóðar */
const VOWELS = 'aeiouyáéýúíóöæ'.split('');

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === 'string';

// Prófum fallið
console.assert(isString('hi') === true, 'isString: skilar `true` fyrir streng');
console.assert(isString(42) === false, 'isString: skilar `false` fyrir tölu');
console.assert(isString(null) === false, 'isString: skilar `false` fyrir null');

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = ' ') {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (!isString(str)) {
    return null;
    // null ef ekki strengur
  }
  if (str.length === 0) {
    return '';
    // skilar tómum streng ef slegið inn tóman streng
  }
  const words = str.split(' '); 
  let longestword = '';
  for (const word of words) {
    if (word.length > longestword.length) {
      longestword = word;
    }    
  }
  return longestword;
}
console.assert(longest("Hnetusmjör og sulta") === "Hnetusmjör", 'longest: should return "quick"');
console.assert(longest("Halló!!! heimur!!") === "Halló!!!", 'longest: Á að skila "Halló!!!"');
console.assert(longest(0) === null, 'longest: Á að skila null ef ekki strengur');
console.assert(longest("") === "", 'longest: Á að skila tómum streng ef input er tómt');

function shortest(str) {
  if (!isString(str)) {
    return null;
    // null ef ekki strengur
  }
  if (str.length === 0) {
    return '';
    // skilar tómum streng ef slegið inn tóman streng
  }
  const words = str.split(' '); 
  let shortestWord = words[0];
  for (const word of words) {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  }
  return shortestWord;
}
console.assert(shortest("Hnetusmjör og sulta") === "og", 'shortest: Á að skila "og"');
console.assert(shortest("Halló!!! heimur!") === "heimur!", 'shortest: Á að skila "heimur!"');
console.assert(shortest(0) === null, 'shortest: Á að skila null ef ekki strengur');
console.assert(shortest("") === "", 'shortest: Á að skila tómum streng ef input er tómt');

function reverse(str) {
  if (isString(str)) {
  const split = str.split('');
  const reversed = split.reverse();

  return reversed.join('');
  }
  return null;
}
console.assert(reverse('Halló Heimur') === 'rumieH óllaH', 'reverse: snýr við einföldum streng');
console.assert(reverse(false) === null, 'reverse: ef ekki strengur, skila null');

function palindrome(str) {
  if (isString(str) && str !== ''){
    const reversed = reverse(str)
    return str.toLowerCase() === reversed.toLowerCase()
  }
    return false;
}
console.assert(palindrome('hahah') === true, 'palindrome: strengur er ekki samhverfur');
console.assert(palindrome('Halló') === false, 'palindrome: strengur er samhverfur');
console.assert(palindrome('') === false, 'palindrome: tómur strengur gildur');

function vowels(str) {
  if (str.length === 0) {
    return '0';
    //Skilar '0' ef strengur er tómur
  }
  if (!isString(str)) {
    return null;
    //Skilar null ef ekki strengur
  }
  let countVowels = 0;
  const strlowercase = str.toLowerCase(); //Því case sensitivity skiptir ekki máli.

  for (const char of strlowercase) {
    if (VOWELS.includes(char)) {
      countVowels++;
    }
  }
  if (countVowels > 0) {
    return countVowels.toString();
  } else {
    return '0';
  }
}
console.assert(vowels("HallÓ Heimur") === '5', 'vowels: Á að skila "5"');
console.assert(vowels("sdfghjkl") === '0', 'vowels: Á að skila "0" fyrir enga sérhljóða');
console.assert(vowels("") === '0', 'vowels: Á að skila "0" fyrir tóman streng');
console.assert(vowels(12345) === null, 'vowels: Á að skila null því ekki strengur');

function consonants(str) {
  if (str.length === 0) {
    return '0';
    //Skilar '0' ef strengur er tómur
  }
  if (!isString(str)) {
    return null;
    //Skilar null ef ekki strengur
  }
  let countConsonants = 0;
  const strlowercase = str.toLowerCase(); //Því case sensitivity skiptir ekki máli.

  for (const char of strlowercase) {
    if (CONSONANTS.includes(char)) {
      countConsonants++;
    }
  }
  if (countConsonants > 0) {
    return countConsonants.toString();
  } else {
    return '0';
  }
}
console.assert(consonants("HallÓ Heimur") === '6', 'consonants: Á að skila "6"');
console.assert(consonants("eIÓæ") === '0', 'consonants: Á að skila "0" fyrir enga samhljóða');
console.assert(consonants("") === '0', 'consonants: Á að skila "0" fyrir tóman streng');
console.assert(consonants(12345) === null, 'consonants: Á að skila null því ekki strengur');


//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  
  alert("Velkomin í forritið! Þetta forrit telur lengstu og stystu orðin, snýr strengjum við, telur sérhljóða og samhljóða, og athugar hvort strengir séu samhverfir.");


  while (true) {
    const input = prompt('Sláðu inn streng eða smelltu á "CANCEL" til að hætta');

    if (input === null || input.length === 0) {
      // Ef cancel eða tómt strengur þá gerum við ekki neitt
      break;
    }

    //Köllum á föllin
    const longestWord = longest(input);
    const shortestWord = shortest(input);
    const reversedString = reverse(input);
    const countVowels = vowels(input);
    const countConsonants = consonants(input);
    const isPalindrome = palindrome(input);

    alert(`
      Niðurstöður:
      Lengsta orðið: ${longestWord}
      Stysta orðið: ${shortestWord}
      Snúið streng: ${reversedString}
      Fjöldi sérhljóða: ${countVowels}
      Fjöldi samhljóða: ${countConsonants}
      Er samhverfur? ${isPalindrome}
      `);
    
    // Spyrja notandann hvort þeir vilja spila aftur
     if (!confirm('Viltu spila aftur?')) {
       break; // Hætta ef notandi velur ekki að spila aftur
     }
      
  }

  alert("Takk fyrir að nota forritið!");
}
