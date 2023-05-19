import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';

import { App } from './App';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          amount: 2500,
          type: 'deposit',
          category: 'Outras receitas',
          createdAt: new Date('2023-05-05 10:00:00')
        },
        {
          id: 2,
          title: 'Compra Supermecado Oliveira',
          amount: 300,
          type: 'withdraw',
          category: 'Mercado',
          createdAt: new Date('2023-05-07 10:00:00')
        },
        {
          id: 3,
          title: 'Aluguel',
          amount: 850,
          type: 'withdraw',
          category: 'Casa',
          createdAt: new Date('2023-05-10 10:00:00')
        },
        {
          id: 4,
          title: 'Corrida 99',
          amount: 13.50,
          type: 'withdraw',
          category: 'Transporte',
          createdAt: new Date('2023-05-10 10:00:00')
        }
      ]
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data);
    });
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);