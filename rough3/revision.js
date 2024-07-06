import { useEffect, useState } from "react";
import NavbarR from "./navbarR";



const Revision = () => {
    const [text, setText] = useState("");
    const [data, setData] = useState([]);
    const [color, setColor] = useState("grey");

    const getData = async () =>
    {
        const res = await fetch(`https://dummyjson.com/products/search?q=${text}`);
        const arr = await res.json();
        setData(arr.products);
    };

    useEffect(()=>{
        getData();
    }, [text]);


    const handlecolorChange = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${randomColor}`);
    };


    return(
        <>
        <div onClick={handlecolorChange}>
        <NavbarR setText={setText}/>
        </div>
        <h2>{text}</h2>
        <hr />
        {
            data.map((elem) => {
                return (<div style={{backgroundColor: color}}>
                    <p>{elem.title}</p>
                    <p>${elem.price}</p>
                    <hr />
                    </div>)
                    })
        }
        </>
    );
};

export default Revision;