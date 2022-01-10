module.exports = function reverse (n) {
  let x = String(Math.abs(n)).split('').reverse()
    return Number(x.join(''))
}
