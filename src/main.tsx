import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css';

import { createServer, Model } from "miragejs"

createServer({

  models: {
    users: Model,
  },


  routes() {
    this.namespace = "api"

    this.get("/users", () => {
      return this.schema.all('users')
    })

    this.post('/users', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('users', data) 
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
