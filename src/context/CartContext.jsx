import {  createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {

    const [cartItem, setCartItem] = useState([])

    const addToCart = (product) => {


        const itemInCart = cartItem.find((item) => item.id === product.id)

        if (itemInCart) {
            // Increase quantity if already in cart
            const updatedCart = cartItem.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItem(updatedCart)
        } else {
            //Add new ietm with quantity 1
            setCartItem([...cartItem, { ...product, quantity: 1 }])
            toast.success("Product is Added to your Cart!")
        }

    }


    const updateQuantity = (productId, actionIorD) => {
        setCartItem(cartItem.map(item => {
            if (item.id === productId) {
                let newUnit = item.quantity;
                if (actionIorD === "increase") {
                    newUnit = newUnit += 1
                } else if (actionIorD === "decrease") {
                    newUnit = newUnit -= 1
                }
                return newUnit > 0 ? { ...item, quantity: newUnit } : null
            }
            return item;
        }).filter(item => item != null) // remove item qunatity 0
        )
    }

    const deleteItem =  (productId) => {
        setCartItem(cartItem.filter(item => item.id != productId))
        UserCartAccess
    }


    return <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updateQuantity, deleteItem }}>
        {children}
    </CartContext.Provider>
}
