import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import cartReducer, { getTotals } from './features/cartSlice.jsx'


const store = configureStore({
  reducer: {
   cart: cartReducer,
  },
})

store.dispatch(getTotals());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <Provider store={store}>
    <App />
   </Provider>
  </React.StrictMode>,
)
