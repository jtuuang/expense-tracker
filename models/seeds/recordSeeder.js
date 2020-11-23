const db = require('../../config/mongoose')

const Record = require('../record')

db.once('open', () => {
  Record.create({
    name: '午餐',
    category: '餐飲食品',
    date: '2019/04/23',
    amount: 60
  })
  Record.create({
    name: '晚餐',
    category: '餐飲食品',
    date: '2019/04/23',
    amount: 60
  })
  Record.create({
    name: '捷運',
    category: '交通出行',
    date: '2019/04/23',
    amount: 120
  })
  Record.create({
    name: '電影：驚奇隊長',
    category: '休閒娛樂',
    date: '2019/04/23',
    amount: 220
  })
  Record.create({
    name: '租金',
    category: '家居物業',
    date: '2019/04/01',
    amount: 25000
  })
  console.log('done')
})