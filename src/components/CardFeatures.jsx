import { MdMenuBook } from "react-icons/md";
export function CardFeatures() {
    return (
        <>
            <div className="bg-gradient-to-t from-black/5 to-white/30 relative p-5 border border-gray-600 rounded-3xl flex flex-col items-center">
                {/* icon */}
                <div className="bg-white p-3 rounded-full text-5xl text-[#df6853] -mt-12">
                    <MdMenuBook />
                </div>
                {/* text */}
                <div className="flex flex-col pt-5 text-center text-white">
                    <h1>Menu variations</h1>
                    <p className="opacity-50">Sed ut perspiciatis unde omnis iste natus error</p>
                </div>
            </div>
        </>
    )
}