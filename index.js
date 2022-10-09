import expenses from './data.json' assert {type: 'json'}

const chart = document.querySelector('.chart')

const renderChart = () => {
  const max = getHighestExpense(expenses)

  const getBar = expense => `
  <div class="bar-box">
    <div class="bar ${max === expense.amount ? 'bar-h' : ''}" data-amount="$${
    expense.amount
  }" style="height:${expense.amount * 3}px;"></div>
    <p class="bar-info">${expense.day}</p>
  </div>
  `

  const chartHtmlStr = expenses.map(expense => getBar(expense)).join(' ')

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
