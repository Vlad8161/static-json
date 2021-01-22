const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send({
    name: 'Device 1',
    actions: [
      {
        id: 'eb34ac05-b1de-4129-acb7-e8a1bde5b1b6',
        action: 'test'
      },
      {
        id: 'eb34ac05-b1de-4129-acb7-e8a1bde5b1b6',
        action: 'wipe'
      }
    ]
  })
})

app.listen(process.env.PORT || 3000, () => console.log('running'))

