const randomWinOfHorse = (arr) => {
  let totalAmountOfElement = arr.length

  return Math.floor(Math.random() * totalAmountOfElement)
}

export default randomWinOfHorse
