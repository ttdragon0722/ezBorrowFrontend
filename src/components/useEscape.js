import { useEffect, useState } from "react";

const useEscape = () => {
    const [clickState,setClickState] = useState(false);
    useEffect(()=>{
        const handleEscape = (state) => {
            setClickState(state);
        }

        handleEscape(false);

        window.addEventListener("keydown",(e)=>{
            if (e.key==="Escape") {
                handleEscape(true);
            }
        })
        window.addEventListener("keyup",(e)=>{
            if (e.key==="Escape") {
                handleEscape(false);
            }
        })

        return () => {
            window.removeEventListener("keydown",(e)=>{
                if (e.key==="Escape") {
                    handleEscape(true);
                }
            });
            window.removeEventListener("keyup",(e)=>{
                if (e.key==="Escape") {
                    handleEscape(false);
                }
            })
        }
    },[]);
    return clickState;
}
export default useEscape;