// kata simple encryption #1 - Alternating Split

function encrypt (text, n) {
  if (text === null || text === '' || n <= 0) {
    return text
  }
  let first = text.split('').filter((e, i) => (i + 1) % 2 === 0).join('')
  let second = text.split('').filter((e, i) => (i) % 2 === 0).join('')
  let pass = first + second
  return encrypt(pass, n - 1)
}

function decrypt (encryptedText, n) {
  if (encryptedText === null || encryptedText === '' || n <= 0) {
    return encryptedText
  }
  let arr = encryptedText.split('')
  let first = arr.slice(0, Math.floor(arr.length / 2))
  let second = arr.slice(Math.floor(arr.length / 2))
  let catcher = []
  for (let i = 0, len = second.length; i < len; i++) {
    catcher.push(second[i])
    catcher.push(first[i])
  }
  let newText = catcher.filter(e => e).join('')
  return decrypt(newText, n - 1)
}

console.log(decrypt('this iss ', 4))
