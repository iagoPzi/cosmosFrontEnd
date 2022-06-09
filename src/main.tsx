import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import './global.css';

import { createServer, Model } from "miragejs"

createServer({

  models: {
    user: Model,
  },

  seeds(server){
    server.db.loadData({
      users:[
        { id: 1, nome: "João", email:'joao@email.com', password:'joao123' },
        { id: 2, nome: "Maria", email:'maria@email.com', password:'maria123' },
      ]
    })
  },

  routes() {
    this.namespace = "api"

    this.get("/users", () => {
      return this.db.users
    })

    this.post('/users', (data) => {
      return this.db.users.insert(data)
    })
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
