const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    name: 'Device 1',
    actions: [
      'test',
      'wipe'
    ]
  })
})

app.listen(process.env.PORT || 3000, () => console.log('running'))

