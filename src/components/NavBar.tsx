import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Dark from '../assets/icons/moon.png'
import Light from '../assets/icons/moon (1).png'
//import './NavBar.css'

function NavBar(props: any) {
    const Mode = props.dark ? "Light Mode" : "Dark Mode"
    return (

        <nav className="navbar navbar-expand-lg bg-black navbar-dark fixed-top bg-body-tertiary border-bottom border-light">
            <div className="container-fluid">
                <a className="navbar-brand fw-bolder fs-2" href="#">Countries</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <button className='btn btn-light m-1' onClick={props.name}>Sort by Name</button>
                        </li>
                        <li className="nav-item" >
                            <button className='btn btn-light m-1' onClick={props.population}>Sort by Population</button>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-light" type="submit">Search</button>
                    </form>
                    {
                        props.dark ? (
                            // <img src={Dark} onClick={props.click} alt="Dark" width="10px" />
                            <button className='btn btn-light m-2 button' onClick={props.click}>
                             {/* <img src={Dark} alt="Dark" width="30" height="24" /> */}
                             {Mode}
                            </button>
                        ) : (
                            <button className='btn btn-light m-2 button' onClick={props.click}>
                                {/* <img src={Light} alt="Light" width="30" height="24" /> */}
                                {Mode}
                            </button>
                        )
                        
                    }
                </div>
            </div>
        </nav>
    )
}

export default NavBar;