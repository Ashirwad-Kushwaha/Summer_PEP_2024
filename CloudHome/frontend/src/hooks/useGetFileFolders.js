import { useEffect, useState } from "react"
import { useSelector } from "react-redux"

const useGetFileFolders = () => {
    const {token} = useSelector((e) => e.auth)

    const [fileFolders, setFileFolders] = useState([])

    const getFileFolders = async () => {
        try{
            const res = await fetch(`${process.env.BACKEND_URL}/api/v1/file-folder`, {
                method: "GET",
                headers: {
                    "content-Type": "application/json",
                    authorization: "Bearer " + token,
                }
            })
            const data = await res.json()
            console.log(data.data.fileFolders);
            setFileFolders(data.data.fileFolders);
        } catch(e) {
            console.log(e.message)
        }
    }

    useEffect(()=>{
        getFileFolders();
    }, [])

    return {getFileFolders, fileFolders}

}

export default useGetFileFolders