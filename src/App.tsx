import Home from "./Home";

import { SportsProvider } from './contexts/SportsContexts'

export function App() {
    return (
        <>
            <SportsProvider>
                <Home/>
            </SportsProvider>
        </>
    )
}