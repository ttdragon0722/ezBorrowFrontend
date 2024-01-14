import gsap from "gsap";
import { useEffect, useRef } from "react";
import useEscape from "../useEscape";

const Modal = ({children,formState,closeForm}) => {
    const fadeOut = () => {
        gsap.to(modalRef.current,{
            opacity:0,duration:0.2,onComplete:()=>{
                closeForm();
            }
        });
    }
    
    const modalRef = useRef();
    const formRef = useRef();
    useEffect(()=>{
        if (formState) {
            gsap.fromTo(modalRef.current,{
                opacity:0
            },{opacity:1,duration:0.5,ease:"power1"});
        }
    },[formState]);
    
    const escapeState = useEscape();
    useEffect(()=>{
        if (escapeState) {
            fadeOut();
        }
    },[escapeState])

    const handleBgQuit = (e) => {
        console.log("bg");
        if (formRef.current && !formRef.current.contains(e.target)) {
            // 點擊到 formRef 元素外部，執行 fadeOut 函數
            fadeOut();
        }
    }

    return (
        <div ref={modalRef} onClick={handleBgQuit} className="absolute top-0 right-0 z-50 w-full h-max bg-stone-300/50 backdrop-blur-sm flex">
            <div ref={formRef} className="w-full m-auto flex items-center justify-center lg:p-12 p-5">
                <div className="bg-white min-w-mobile-sm w-full max-w-tablet h-full lg:px-10 lg:py-10 px-1 rounded-lg">
                    {children}
                    <div className="flex gap-5 justify-center my-5">
                        <button onClick={fadeOut} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                            取消
                        </button>
                        <button onClick={fadeOut} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            提交
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal;