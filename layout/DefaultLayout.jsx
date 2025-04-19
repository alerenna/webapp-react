import { Outlet } from "react-router-dom";
import { useContext } from "react";
import Header from '../components/Header'
import Footer from '../components/Footer'
import { GlobalContext } from "../src/contexts/GlobalContext";

export default function DefaultLayout() {

    const { isLoading } = useContext(GlobalContext)



    console.log("Loader status:", isLoading);
    return (
        <>
            {isLoading && (
                <div className="loader-overlay d-flex justify-content-center align-items-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            )}

            <div className="wrapper">
                <Header />
                <Outlet />
                <Footer />
            </div>

        </>
    )
}