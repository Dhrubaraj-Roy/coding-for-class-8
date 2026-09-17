import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App.jsx'
import stores from './Store.jsx'

createRoot(document.getElementById('root')).render(
    <Provider store={stores}>
        <App />
    </Provider>
)
