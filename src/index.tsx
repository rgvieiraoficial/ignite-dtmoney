import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Desenvolvimento de website',
          ammount: 4500,
          type: 'deposit',
          category: 'Other Earnings',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel',
          ammount: 850,
          type: 'withdraw',
          category: 'Home',
          createdAt: new Date()
        }
      ];
    })
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