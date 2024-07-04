function middleOf(string) {
    const middle = Math.floor(string.length / 2); 
  
    if (string.length % 2 === 1) {
      return string.charAt(middle); 
    } else {
      return string.slice(middle - 1, middle + 1); 
    }
  }
  
  const str = "HELLO"
  console.log(str.length); 
  console.log(middleOf(str)); 