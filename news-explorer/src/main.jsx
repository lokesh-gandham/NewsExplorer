
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './app/store.js'
import ThemeContextProvider from './context/ThemeContext.jsx'
ThemeContextProvider
createRoot(document.getElementById('root')).render(
      <Provider store={store}>
      <ThemeContextProvider>
          <BrowserRouter>
        <App />
      </BrowserRouter>
      </ThemeContextProvider>
  </Provider>
)
