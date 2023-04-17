import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
//import './NavBar.css'
function NavBar() {
    return (

        <nav className="navbar navbar-expand-lg bg-black navbar-dark fixed-top fw-semibold border-bottom border-white">
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder fs-2" href="#">Countries</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active">Sort by Name</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active">Sort by Population</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;