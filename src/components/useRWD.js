import { useEffect, useState } from "react";

const useRWD = () => {
    const [view,setView] = useState();
    useEffect(() => {
        const handleResize = () => {
            setView(window.innerWidth);
        };
        setView(window.innerWidth);

        window.addEventListener("resize",handleResize);
        return () => {
            window.removeEventListener("resize",handleResize);
        }
    },[]);
    return view;
}

export default useRWD;