import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/img/logo.png';

export default function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <nav className="navbar navbar-expand-lg navbar-light bg-light py-2">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ms-auto me-3">
                                <a className="nav-item nav-link" href="/#about">About</a>
                                <a className="nav-item nav-link" href="/#pricing">Pricing</a>
                                <a className="nav-item nav-link" href="/#contact">Contact</a>
                            </div>
                            <Link className="btn btn-outline-secondary px-4 py-2" to="login">Login</Link>
                        </div>
                    </div>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="text-secondary">All Rights Reserved &#169; <span className="text-dark fw-semibold">KeDA ERP</span> 2023</p>
                        </div>
                        <div className="col d-flex justify-content-end">
                            <ul className="list-unstyled">
                                <li className="d-inline-block me-3">
                                    <a className="text-decoration-none text-secondary" href="/#">Term</a>
                                </li>
                                <li className="d-inline-block">
                                    <a className="text-decoration-none text-secondary" href="/#">Privacy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
