import ReactDOM from 'react-dom/client';
import "./globalStyle.css";
import HomePage from "./src/pages/homePage";



const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);



const App = () => {
    return (
        <div>
            <HomePage/>
        </div>
    );
};

root.render(App());