import expenses from './data.json' assert {type: 'json'}

const chart = document.querySelector('.chart')

const renderChart = () => {
  const max = getHighestExpense(expenses)

  const getBase = data => `
  <div class="bar-box">
    <div class="bar ${max === data.amount ? 'bar-h' : ''}" data-amount="$${
    data.amount
  }" style="height:${data.amount * 3}px;"></div>
    <p class="bar-info">${data.day}</p>
  </div>
  `

  const chartHtmlStr = expenses.map(expense => getBase(expense)).join(' ')

  chart.innerHTML = chartHtmlStr

  const bars = [...document.querySelectorAll('.bar')]

  bars.forEach(bar =>
    bar.addEventListener('mouseover', e => {
      e.target.style.setProperty('--hover-opacity', 1)
    }),
  )

  bars.forEach(bar =>
    bar.addEventListener('mouseout', e => {
      e.target.style.setProperty('--hover-opacity', 0)
    }),
  )
}

const getHighestExpense = exp => Math.max(...exp.map(e => e.amount))

renderChart()
