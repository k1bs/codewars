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

function myArraySum (x) {
  let catcher = 0
  for (var i = 0; i < x.length; i++) {
    catcher += x[i]
  }
  return catcher
}

class Customer {
  constructor (name, address) {
    this.name = name
    this.address = address
  }

  printShippingLabel () {
    return `
      ${this.name}
      ${this.address}
    `
  }
}

function extractData () {
  let table = document.querySelector('#data')
  let rows = table.querySelectorAll('tr')
  let catcher = []
  for (let i = 0, len = rows.length; i < len; i++) {
    catcher.push({
      date: rows[i].querySelectorAll('td')[0],
      requests: rows[i].querySelectorAll('td')[1],
      paidImpressions: rows[i].querySelectorAll('td')[2],
      revenue: rows[i].querySelectorAll('td')[3]
    })
  }
  catcher.shift()
  return catcher
}

function kebabize (str) {
  let filteredStr = str.split('').filter(e => {
    if (!parseInt(e, 10) && parseInt(e, 10) !== 0) {
      return e
    }
  }).join('')
  let arr = filteredStr.split(/(?=[A-Z])/)
  let lower = arr.map(e => {
    let str = e.toLowerCase()
    return str
  })
  let string = lower.join('-')
  return string
}

// console.log(kebabize('thisIs0GreatThing'))

class FileNameExtractor {
  static extractFileName (dirtyFileName) {
    let sansDate = dirtyFileName.split('_')
    sansDate.shift()
    sansDate = sansDate.join('_')
    sansDate = sansDate.split('.')
    sansDate.pop()
    sansDate = sansDate.join('.')
    return sansDate
  }
}

// FileNameExtractor.extractFileName('1_This_is_an_otherExample.mpg.OTHEREXTENSIONadasdassdassds34')

function reverseByCenter (s) {
  let middleChar, firstHalf, secondHalf
  if ((s.length % 2) === 0) {
    middleChar = ''
    firstHalf = s.slice(0, Math.floor(s.length / 2))
    secondHalf = s.substring(Math.ceil(s.length / 2))
  } else {
    middleChar = s.slice(Math.floor(s.length / 2), Math.ceil(s.length / 2))
    firstHalf = s.slice(0, Math.floor(s.length / 2))
    secondHalf = s.substring(Math.ceil(s.length / 2))
  }
  return secondHalf + middleChar + firstHalf
}

// console.log(reverseByCenter('true'))

function group (arr) {
  let order = []
  let map = {}
  arr.forEach(elem => {
    if (!map.hasOwnProperty(elem)) {
      order.push(elem)
    }
    map[elem] = (map[elem] || 0) + 1
  })
  let returnArr = []
  order.forEach(elem => returnArr.push(Array(map[elem]).fill(elem)))
  return returnArr
}

// console.log(group([1, 2, 3, 2]))

// Resistor Color Codes: Part 2

function encodeResistorColors (ohmsString) {
  let colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'white']
  let ohmsArr = ohmsString.split(' ')[0].split('')
  let colorArr = []
  let multiplierColor = 0

  ohmsArr.forEach(elem => {
    if (elem.match(/[0-9]/) && colorArr.length < 2) {
      colorArr.push(colors[parseInt(elem)])
    } else if (elem.match(/[.]/)) {
      multiplierColor -= 1
    } else if (elem.match(/[0-9]/) && colorArr.length >= 2) {
      multiplierColor += 1
    } else if (elem.match(/[k]/)) {
      multiplierColor += 3
    } else if ((elem.match(/[M]/))) {
      multiplierColor += 6
    }
  })
  if (colorArr.length < 2) {
    colorArr.push(colors[0])
    multiplierColor -= 1
  }
  colorArr.push(colors[multiplierColor])
  colorArr.push('gold')
  return colorArr.join(' ')
}

// console.log(encodeResistorColors('39 ohms'))
// console.log(encodeResistorColors('3.9k ohms'))
// console.log(encodeResistorColors('39M ohms'))

// Array.diff

function array_diff (a, b) {
  let keymap = {}
  let returnArr = []
  b.forEach(elem => {
    keymap[elem] = true
  })
  returnArr = a.filter((item) => !keymap.hasOwnProperty(item))
  return `a was ${a}, b was ${b}, expected ${returnArr}`
}

array_diff([1, 2, 3], [3, 5])

// Consonant Value

function solve (s) {
  let alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let arr = s.split(/[aeiou]/)
  let score = []
  arr.forEach(elem => {
    let babyArr = elem.split('')
    let elemScore = 0
    babyArr.forEach(elem => {
      elemScore += (alpha.indexOf(elem) + 1)
    })
    score.push(elemScore)
  })
  return score.sort((a, b) => b - a)[0]
}

// console.log(solve('zodiacs'))

// Free Pizza

function pizzaRewards (customers, minOrders, minPrice) {
  let validCustomers = []
  for (const key in customers) {
    if (customers.hasOwnProperty(key)) {
      const element = customers[key]
      let validOrders = []
      element.forEach(elem => {
        if (elem >= minPrice) {
          validOrders.push(elem)
        }
      })
      if (validOrders.length >= minOrders) {
        validCustomers.push(key)
      }
    }
  }
  return validCustomers
}

pizzaRewards({
  'Bobby': [1, 4, 9],
  'Billy': [2, 90, 4]
}, 1, 2)
