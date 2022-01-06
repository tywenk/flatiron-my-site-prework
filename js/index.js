const height = window.innerHeight
const width = window.innerWidth

console.log(`Width: ${width}, Height: ${height}`)

const makeCheckGrid = () => {
  const div = document.createElement("div")
  div.setAttribute("id", "bg-cb")
  document.body.appendChild(div)

  const bgcb = document.getElementById("bg-cb")
  const row = 5
  const col = 10
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      const check = document.createElement("input")
      check.type = "checkbox"
      check.className = "cb"
      if (randomBool()) {
        check.checked = true
      }
      bgcb.appendChild(check)
    }
  }
}

function makeMarquee() {
  const div = document.createElement("div")
  div.setAttribute("class", "marq-cont")
  document.body.appendChild(div)
}

const randomBool = () => {
  // 50 % true or false
  return Math.floor(Math.random() < 0.5)
}

makeCheckGrid()
