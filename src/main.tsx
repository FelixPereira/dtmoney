import React from 'react'
import ReactDOM from 'react-dom/client'
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freeelance de website',
          type: 'deposit',
          category: 'Dev',
          amount: 2000,
          createdAt: new Date('2022-05-15 10:00.00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 6000,
          createdAt: new Date('2022-02-16 17:00.00'),
        },
        {
          id: 3,
          title: 'Comprei um carro',
          type: 'withdraw',
          category: 'Carro',
          amount: 3000,
          createdAt: new Date('2022-04-18 17:00.00'),
        },
        {
          id: 4,
          title: 'Criei em eCommerce',
          type: 'deposit',
          category: 'Dev',
          amount: 3000,
          createdAt: new Date('2022-04-18 17:00.00'),
        }
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    })
  }
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
