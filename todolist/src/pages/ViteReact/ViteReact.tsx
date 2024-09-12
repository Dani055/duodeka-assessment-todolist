import "./ViteReact.css"
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import { useGlobalState } from "../../GlobalStateProvider";
import { Button } from "@mui/material";

function ViteReact() {
    const { state, setGlobalState } = useGlobalState();
    const { count } = state;

    return (
        <div className="text-center">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <Button
                
                    onClick={() => {
                        setGlobalState({ count: count + 1 });
                    }}
                >
                    count is {count}
                </Button>
                <p className="mt-3">
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs mt-3">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    );
}

export default ViteReact;
