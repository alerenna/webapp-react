import { NavLink } from "react-router-dom"

export default function Footer() {
    return (
        <>

            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>LOREM</h5>
                            <ul className="list-unstyled">
                                <li><NavLink to="/" className="text-white" style={{ textDecoration: 'none' }}>Home</NavLink></li>
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                            </ul>
                        </div>
                        <div className="col-md-6">
                            <h5>LOREM</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                                <li><a href="#" className="text-white" style={{ textDecoration: 'none' }}>Lorem</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}