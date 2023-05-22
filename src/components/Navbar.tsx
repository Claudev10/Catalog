import { Container, Button, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import shoppingimg from "../img/shoppingcart.png"
import { useShoppingCart } from "../context/shoppingcartcontext"

export function Navbar() {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm">
            <Container>
                <Nav me-auto>                   
                    <Nav.Link to="/" as={NavLink}>
                        Loja
                    </Nav.Link>
                    <Nav.Link to="/about" as={NavLink}>
                        Sobre
                    </Nav.Link>
                </Nav>
                <Button 
                onClick={openCart}
                variant="outline-primary" 
                style={{ position: "relative" }}>
                    <img src={shoppingimg} alt="shopping cart" style={{ width: "2rem", height: "2rem" }} />
                    <div className="rounded bg-danger d-flex justify-content-center align-items-center"
                        style={{
                            color: "white",
                            width: "1.5em",
                            height: "1.5rem",
                            position: "absolute",
                            bottom: 0,
                            right: 0,
                            transform: "translate(25%, 25%)",
                        }} >{cartQuantity}</div>
                </Button>
            </Container>
        </NavbarBs>
    )
}