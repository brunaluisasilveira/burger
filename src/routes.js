import { Router } from 'express'
// eslint-disable-next-line no-unused-vars
const { request, response } = require('./app')

const routes = new Router()

routes.get('/', (request, response) => {
  return response.json({ message: 'Hello Word!!!' })
})

export default routes
