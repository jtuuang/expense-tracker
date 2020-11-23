const express = require('express')
const router = express.Router()
const Record = require('../../models/record')

function checkSort(sort, res) {
  return Record.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(records => records.filter(record => record.category === sort))
    .then(records => {
      let totalAmount = 0
      records.forEach(record => totalAmount += record.amount)
      res.render('index', { records, totalAmount })
    })
    .catch(error => console.log(error))
}

router.get('/', (req, res) => {
  const sort = req.query.sort

  if (sort) {
    checkSort(sort, res)
  } else {
    return Record.find()
      .lean()
      .sort({ _id: 'asc' })
      .then(records => {
        let totalAmount = 0
        records.forEach(record => totalAmount += record.amount)
        res.render('index', { records, totalAmount })
      })
      .catch(error => console.log(error))
  }
})

module.exports = router