import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/GlobalStyle";

export function App() {
    return (
        <>
            <GlobalStyle />
            <RoutesMain />
            <ToastContainer autoClose={2000} />
        </>
    );
}
