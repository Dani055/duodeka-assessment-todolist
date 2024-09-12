import './Header.css'
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="shadow-lg position-relative">
            <nav>
                <h4 className="mx-3 pt-3 pb-3">Duodeka todo app</h4>
                <div className="container d-flex align-items-center d-sm-inline-block px-3 pb-4 pt-1">

                    <Link className="nav-link pe-2" to="/">Todos</Link>
                    <Link className="nav-link pe-2 pt-1" to="vitereact">Vite + React</Link>
                    <Link className="nav-link pe-2 pt-1" to="groceries">Groceries</Link>
                    <Link className="nav-link pe-2 pt-1" to="asda">404</Link>
                </div>

            </nav>
            <p className="signature d-sm-inline-block d-none"> Made by Yordan Doykov</p>
        </header>
    );
}

export default Header;
