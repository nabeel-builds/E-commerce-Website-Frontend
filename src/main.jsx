import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ClerkProvider } from '@clerk/react'
import { DataProvider } from './context/DataContext.jsx'
import { CartContext, CartProvider } from './context/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import ScrollToTop from "react-scroll-to-top";

createRoot(document.getElementById('root')).render(
    <DataProvider>
        <CartProvider>
            <ClerkProvider>
                <App />
                <ScrollToTop smooth color='white' style={{backgroundColor:"#fa2d37", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%", width: "60px", height: "60px"}} />
                <ToastContainer
                    position="bottom-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </ClerkProvider>
        </CartProvider>
    </DataProvider>,
)
