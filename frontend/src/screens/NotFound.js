import { Link } from "react-router-dom"

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h2>Oops!!!</h2>
            <p>Página no encontrada</p>
            <Link to='/'>Regresar a inicio...</Link>
        </div>
    );
}

export default NotFound;
