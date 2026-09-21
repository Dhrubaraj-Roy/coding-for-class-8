import { createRoot } from 'react-dom/client'
import CreateCoin from './CreateCoin'
import { Provider } from 'react-redux'
import stores from './Store'
createRoot(document.getElementById('root')).render(

    <Provider store={stores}>
        <CreateCoin />
    </Provider>
)
