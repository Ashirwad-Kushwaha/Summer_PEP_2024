import ReactDOM from "react-dom/client";

const parent = document.getElementById("root");

const root = ReactDOM.createRoot(parent);

const App = ()=>{
    return <div>Hello from React</div>
}

root.render(<App/>)