import { createRoot } from 'react-dom/client'
import App from "./App.jsx"
import {Provider} from "react-redux"
import store from './Store.jsx'
import CustomCounter from './CustomCounter.jsx'

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <br />
    <br />
    <CustomCounter/>
  </Provider>
)
