const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const routes = require('./routes')

require('./config/mongoose')

const app = express()

app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  helpers: {
    renderIcon(category) {
      switch (category) {
        case '家居物業':
          return `<i class="fas fa-home fa-3x" style="padding-right: 11px;"></i>`
        case '交通出行':
          return `<i class="fas fa-shuttle-van fa-3x" style="padding-right: 5px;"></i>`
        case '休閒娛樂':
          return `<i class="fas fa-grin-beam fa-3x" style="padding-right: 18px;"></i>`
        case '餐飲食品':
          return `<i class="fas fa-utensils fa-3x" style="padding-right: 26px;"></i>`
        case '其他':
          return `<i class="fas fa-pen fa-3x" style="padding-right: 17px;"></i>`
        default:
          return `<i class="fas fa-pen fa-3x" style="padding-right: 17px;"></i>`
      }
    }
  }
}))

app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.use(methodOverride('_method'))

app.use(routes)

app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})