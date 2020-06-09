const express = require('express')
const app = express()
const cors = require('cors')
var morgan = require('morgan')


app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(
    morgan(function (tokens, req, res) {
        const postData = tokens.method(req, res) == 'POST' ? 
        JSON.stringify(req.body) : ''
        return [
          tokens.method(req, res),
          tokens.url(req, res),
          tokens.status(req, res),
          tokens.res(req, res, 'content-length'), '-',
          tokens['response-time'](req, res), 'ms',
          postData
        ].join(' ')
      })
)

let persons = [
    {
        name: "Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name: "Ada Lovelace",
        number: "39-44-5323523",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name: "Mary-Poppendieck",
        number: "39-23-6423122",
        id: 4
    }
]

app.get('/api/persons', (req, res) => {
  res.json(persons)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(p => p.id === id)
    if (person) {
      response.json(person)
    } else {
      response.status(404).end()
    }
  })

app.delete('/api/persons/:id', (request, response) => {
  const id = Number(request.params.id)
  persons = persons.filter(p => p.id !== id)
  response.status(204).end()
})

app.post('/api/persons', (request, response) => {
  const body = request.body
  if (!body.name || !body.number) {
    const missing = !body.name ? 'Name' : 'Number'
    return response.status(400).json({ 
        error: `${missing} is missing`
    })
  }
  if (persons.map(p=>p.name).includes(body.name)) {
    return response.status(403).json({ 
        error: 'Name must be unique'
    })
  }
  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random() * Math.floor(1000)),
  }  
  persons = persons.concat(person)
  response.json(person)
})

app.get('/info', (req, res) => {
    const length = persons.length
    const infoText = `Phonebook has info for ${length} people`
    res.send(
      `<p>${infoText}</p>
       <p>${new Date()}</p>`
    )
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})