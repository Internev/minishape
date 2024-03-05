const genRandomInput = () => {
  const chars =
    'abcdefghijklmnopqrstuvwxyz()[]-+/\\,.<>?;:\'"!@#$%^&*~`1234567890'
  const len = Math.floor(Math.random() * 100000)
  let result = ''
  for (let i = 0; i < len; i++) {
    result += chars[Math.floor(Math.random() * chars.length)]
  }
  return result
}

const input = genRandomInput()

const halfcircle = () => {
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
        result += '♥♥'
      } else if (y === 0 && Math.abs(x) !== n * 2) {
        console.log('x', x)
        result += '♥♥'
      } else if (y > 0 && Math.abs(x) <= 2 * n - y) {
        result += '♥♥'
      } else {
        result += '  '
      }
    }
    result += '\n'
  }
  return result
}

const minishape = (text, shape = 'heart') => {
  // make two half circles side by side
  console.log(halfcircle())
}

minishape(input, 'heart')

