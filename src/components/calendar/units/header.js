const Header = () => {
    return (
        <div className="grid grid-cols-7 w-full text-center text-xs tracking-wide">
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期一</div>
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期二</div>
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期三</div>
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期四</div>
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期五</div>
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期六</div>
            <div className="text-gray-400 py-2 border border-[#e5e7eb] border-t-2">星期日</div>
        </div>
    )
}

export default Header;