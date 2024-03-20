const genRandomInput = (len = 1000) => {
  const chars =
    'abcdefghijklmnopqrstuvwxyz()[]-+/\\,.<>?;:\'"!@#$%^&*~`1234567890'
  let result = ''
  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

function* progressiveSubstringGenerator(inputString, chunkSize) {
  let index = 0;
  let remainingCharacters = inputString.length;
  
  while (index < inputString.length) {
      const s = inputString.substring(index, index + chunkSize);
      yield { s, remainingCharacters };
      index += chunkSize;
      remainingCharacters -= chunkSize;
  }
}

const input = genRandomInput(50000)

const substringGenerator = progressiveSubstringGenerator(input, 2)

const remaining = { len: 50000}

const heart = () => {
  // Create a half circle from text up to 60 characters wide.
  const n = 8
  let result = ''
  for (let y = -n; y <= 2 * n; y++) {
    for (let x = -2 * n; x <= 2 * n; x++) {
      if (
        y < 0 &&
        (Math.sqrt((x + n) * (x + n) + y * y) <= n ||
          Math.sqrt((x - n) * (x - n) + y * y) <= n)
      ) {
        const { value, done } = substringGenerator.next()
        if (done) return result
        result += value.s
        remaining.len = value.remainingCharacters
      } else if (y === 0 && Math.abs(x) !== n * 2) {
        const { value, done } = substringGenerator.next()
        if (done) return result
        result += value.s
        remaining.len = value.remainingCharacters
      } else if (y > 0 && Math.abs(x) <= 2 * n - y) {
        const { value, done } = substringGenerator.next()
        if (done) return result
        result += value.s
        remaining.len = value.remainingCharacters
      } else {
        result += '  '
      }
    }
    result += '\n'
  }
  result += '\n\n\n'
  return result
}

const minishape = (text, shape = 'heart') => {
  // make two half circles side by side
  let result = ''
  while (remaining.len > 1685) {
    console.log(remaining.len)
    result += heart()
  }
  console.log(result)
}

minishape(input, 'heart')

