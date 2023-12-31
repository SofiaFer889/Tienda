import "./css/Item.css"
import { Link } from "react-router-dom"

const Item = ({id,imag, nombre, precio, stock}) => {
    return (
        <article className="CardItem card">
            <header className="header">
                <h2 className="ItemHeader">{nombre}</h2>
                <img src={`/img/${imag}`}  alt={nombre} className="imag card-img-top" />
            </header>
            <section>
                <p className="Info">Precio: ${precio}</p>
                <p className="Info">Stock: {stock}</p>
            </section>
            <footer className="ItemFooter">
                <Link to={`/item/${id}`} className="btn btn-primary Option">Detalle</Link> 
            </footer>
        </article>
    )
}


export default Item