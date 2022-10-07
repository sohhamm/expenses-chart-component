import expenses from './data.json' assert {type: 'json'}

const chart = document.querySelector('.chart')

const renderChart = () => {
  const max = getHighestExpense(expenses)

  console.log({max})
  const getBase = data => `
  <div class="bar-box">
    <div class="bar" style="height:${data.amount * 3}px; ${
    max === data.amount ? `background-color: #76B5BC` : ``
  }"></div>
    <p class="bar-info">${data.day}</p>
  </div>
  `

  const chartHtmlStr = expenses.map(expense => getBase(expense)).join(' ')

  chart.innerHTML = chartHtmlStr
}

const getHighestExpense = exp => Math.max(...exp.map(e => e.amount))

renderChart()
