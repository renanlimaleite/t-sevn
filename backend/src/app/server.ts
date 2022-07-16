import express, { Request, Response } from 'express'

const app = express()
const PORT = 3333

app.use(express.json())

app.get('/', (request: Request, response: Response) => {
  return response.send('Hello Sevn')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})