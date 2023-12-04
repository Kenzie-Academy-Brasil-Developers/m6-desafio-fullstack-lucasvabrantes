import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/GlobalStyle";
import "react-toastify/dist/ReactToastify.css";

export function App() {
    return (
        <>
            <GlobalStyle />
            <RoutesMain />
            <ToastContainer autoClose={2000} />
        </>
    );
}
