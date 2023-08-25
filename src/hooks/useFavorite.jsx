import { faV } from "@fortawesome/free-solid-svg-icons"
import { useEffect, useState } from "react"

export const useFavorite = (product) => {
    const [star, setStar] = useState({ star: false, product: product })
    const changeStarState = (product) => {
        star.star === false ? setStar({ star: true, product: product }) : setStar({ star: false, product: product })
    }
    useEffect(() => {
        let dataFavorite = JSON.parse(window.localStorage.getItem("favorite"))
        dataFavorite.forEach(fav => {
            if (fav.id === star.product.id) {
                setStar({ star: true, product: product })
            }
        })
    }, [])
    return { star, changeStarState }
}