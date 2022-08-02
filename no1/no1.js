function scoreChecker(score) {
  // Tulis kodingan dibawah ini

  let result;

  if (score >= 90) {
    result = "Selamat! Anda mendapatkan nilai A."
  } 
  else if(score >= 80 && score <= 89){
    result = "Anda mendapatkan nilai B."
  }
  else if(score >= 70 && score <= 79){
    result = "Anda mendapatkan nilai C."
  }
  else if(score >= 60 && score <= 69){
    result = "Anda mendapatkan nilai D."
  }
  else{
    result = "Anda mendapatkan nilai E."
  }

  return result;
}

console.log(scoreChecker(92)); // Selamat! Anda mendapatkan nilai A.
console.log(scoreChecker(85)); // Anda mendapatkan nilai B.
console.log(scoreChecker(74)); // Anda mendapatkan nilai C.
console.log(scoreChecker(60)); // Anda mendapatkan nilai D.
console.log(scoreChecker(59)); // Anda mendapatkan nilai E.
