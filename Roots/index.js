function findSquareRoot(number) {
    // Agar kiritilgan son manfiy bo'lsa, natija NaN bo'ladi
    if (number < 0) {
      return "Manfiy sonlar ildizini hisoblash mumkin emas";
    }
    // JavaScriptning built-in sqrt() metodidan foydalanamiz
    return Math.sqrt(number);
  }
  
  // Masalan, 25 ning ildizi:
  console.log(findSquareRoot(9)); // 5
  