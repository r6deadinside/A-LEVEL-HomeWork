for (let i = 0, bool = false; i < 10; i++) {
  if (bool === true)
    break
  for (let j = 0; j < 10; j++) {
    if (i === 5 && j === 5) {
      bool = true
      break;
    } console.log(i, j);
  }
}
