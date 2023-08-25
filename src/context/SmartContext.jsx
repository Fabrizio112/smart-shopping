import { createContext, useEffect, useReducer, useState } from "react";
import allProducts from "../mocks/products.json"
import { CartReducer } from "../reducer/CartReducer";
import { ACTIONS, initialProductsState } from "../helpers/const";
const SmartContext = createContext()
const SmartProvider = ({ children }) => {
    const [products] = useState(allProducts)

    const getRandomProduct = () => {
        const index = Math.round(Math.random() * (100 - 0 + 1) + 0);
        return products[index]
    }


    const [filters, setFilters] = useState({
        category: "all",
        price: 0
    })
    const resetFilterCategory = () => {
        setFilters({ ...filters, category: "all" })
    }
    const categoryFilter = products => {
        return products.filter(product => {
            return product.price >= filters.price && (
                filters.category === "all" ||
                product.category === filters.category
            )
        })
    }
    const changeCategory = (e) => {
        const value = e.target.innerText.toLowerCase()
        setFilters({ ...filters, category: value })
    }
    const changePrice = (e) => {
        const value = e.target.value.toLowerCase()
        setFilters({ ...filters, price: value })
    }

    const [productSelected, setProductSelected] = useState(JSON.parse(window.localStorage.getItem("product")) ? JSON.parse(window.localStorage.getItem("product")) : null)
    const changeProductSelected = (product) => {
        window.localStorage.setItem("product", JSON.stringify(product))
        setProductSelected(product)
    }

    const [cart, dispatch] = useReducer(CartReducer, JSON.parse(window.localStorage.getItem("cart")) ? JSON.parse(window.localStorage.getItem("cart")) : initialProductsState)
    const [aditionalInfo, setAditionalInfo] = useState({})
    const addToCart = (product) => dispatch({
        type: ACTIONS.ADD_TO_CART, payload: product
    })
    const removeFromCart = (product) => dispatch({
        type: ACTIONS.REMOVE_FROM_CART, payload: product
    })
    const cleanCart = () => dispatch({
        type: ACTIONS.CLEAN_CART
    })

    useEffect(() => {
        if (cart && cart.length > 0) {
            function calculateDifferentStuff(cart) {
                let quantityFinal = 0
                let finalPrice = 0
                cart.map(product => {
                    quantityFinal += product.quantity
                    finalPrice += product.price * product.quantity
                })
                return { quantityFinal, finalPrice }
            }
            setAditionalInfo(calculateDifferentStuff(cart))
            window.localStorage.setItem("cart", JSON.stringify(cart))
        } else {
            setAditionalInfo({})
        }

    }, [cart])

    const [modalAdd, setModalAdd] = useState(false)
    const showModal = () => {
        setModalAdd(true)
        setTimeout(() => {
            setModalAdd(false)
        }, 700)
    }

    const [favorite, setFavorite] = useState([])
    const addFavorite = (product) => {
        let newState = [...favorite, product]
        setFavorite(newState)
        window.localStorage.setItem("favorite", JSON.stringify(newState))
    }
    const removeFavorite = (product) => {
        let newState = favorite.filter(favorite => favorite.id != product.id)
        setFavorite(newState)
        window.localStorage.setItem("favorite", JSON.stringify(newState))
    }
    useEffect(() => {
        let dataFavorite = JSON.parse(window.localStorage.getItem("favorite"))
        if (dataFavorite && dataFavorite.length > 0) {
            setFavorite(dataFavorite)
        }
    }, [])
    return <SmartContext.Provider value={{
        products,
        getRandomProduct,
        filters,
        categoryFilter,
        changeCategory,
        changePrice,
        resetFilterCategory,
        productSelected,
        changeProductSelected,
        cart,
        addToCart,
        removeFromCart,
        cleanCart,
        aditionalInfo,
        modalAdd,
        showModal,
        favorite,
        addFavorite,
        removeFavorite
    }}>{children}</SmartContext.Provider>
}

export default SmartContext
export { SmartProvider }