import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"
import { HashRouter } from "react-router-dom";
import React from "react";
import NavBar from "./NavBar"
import { SmartProvider } from "../../context/SmartContext";
import imagenIcono from "../../assets/img/smart-shopping.png";

describe("NavBar Test", () => {
    beforeEach(() => {
        render(
            <>
                <HashRouter>
                    <SmartProvider>
                        <NavBar />
                    </SmartProvider>
                </HashRouter>
            </>);
    })
    test("Should NavBar be a function", () => {
        expect(typeof NavBar).toBe("function")
    })
    test("It should has a search bar ", () => {
        let searchBar = screen.getByRole("textbox")
        expect(searchBar).toBeInTheDocument()
    })
    test("It should has an image", () => {
        let image = screen.getByRole("img")
        expect(image).toBeInTheDocument()
        expect(image).toHaveAttribute("src", imagenIcono)
    })
    test("It should has a favorite Icon", () => {
        let favoriteIcon = screen.getByRole("favorite")
        expect(favoriteIcon).toBeInTheDocument()
    })
    test("It should has a cart Icon", () => {
        let cartIcon = screen.getByRole("cart")
        expect(cartIcon).toBeInTheDocument()
    })
    test("It should has a List with different elements", () => {
        let list = screen.getByRole("list")
    })
})