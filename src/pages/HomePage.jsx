import { Navbar } from "../components/Navbar"
import { Button } from "../components/Button"
import { CardFeatures } from "../components/CardFeatures"
import {Footer} from "../components/Footer"
export function HomePage() {
    return (
        <>
            <div className="bg-[#374151]">
                <div className="container m-auto py-5 px-5 lg:px-0">
                    <Navbar />
                    <div className="grid grid-cols-1 lg:grid-cols-12 items-center text-white lg:p-15 mt-7 md:mt-5 lg:mt-0">
                        <div className="lg:col-span-6 flex flex-col gap-5">
                            <h1 className="font-bold text-3xl md:text-5xl">Cook anything with the experts</h1>
                            <p className="font-light opacity-70 text-lg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                accusantium doloremque laudantium, totam</p>
                            <div className="md:max-w-[14rem]  lg:max-w-[30rem]  gap-5 flex flex-col lg:flex-row">
                                <Button value="Lest Cook" style={"bg-[#df6853] text-white w-full"} />
                                <Button value="Explore Now" style={"bg-[#df6853]/15 text-[#df6853] w-full"} />
                            </div>
                        </div>
                        <div className="col-span-6 md:max-w-xl m-auto lg:max-w-full">
                            <img src="/public/images/banner-image.png" alt="" className="w-full" />
                        </div>
                    </div>

                </div>
            </div>

            <div className="bg-black">
                <div className="container m-auto py-5 px-5 lg:px-0 text-white text-center">
                    <h2 className="font-light text-xl text-[#df6853]">Features</h2>
                    <p className="font-bold text-3xl md:text-5xl">Get a many of interesting features.</p>
                    <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
                        <CardFeatures />
                        <CardFeatures />
                        <CardFeatures />
                        <CardFeatures />
                    </div>
                </div>

                {/* Galery */}
                <div className="container m-auto py-5 px-5 lg:px-0 text-white text-center">
                    <h2 className="font-light text-xl text-[#df6853]">Features</h2>
                    <p className="font-bold text-3xl md:text-5xl">Get a many of interesting features.</p>
                    <div className="flex gap-6 mt-15">
                        {/* Kiri */}
                        <div className="w-1/2 flex flex-col gap-6">
                            <div className="relative group overflow-hidden rounded-4xl h-[400px]">
                                <img
                                    src="https://picsum.photos/600/400?random=1"
                                    alt="Image 1"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute w-full h-full bg-black/40 top-full group-hover:top-0 duration-500 flex items-end p-6">
                                    <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
                                    <p className="text-white text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis?</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-4xl h-[200px]">
                                <img
                                    src="https://picsum.photos/600/200?random=2"
                                    alt="Image 2"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute w-full h-full bg-black/40 top-full group-hover:top-0 duration-500 flex items-end p-6">
                                    <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
                                    <p className="text-white text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis?</p>
                                </div>
                            </div>
                        </div>

                        {/* Kanan */}
                        <div className="w-1/2 flex flex-col gap-6">
                            <div className="relative group overflow-hidden rounded-4xl h-[200px]">
                                <img
                                    src="https://picsum.photos/600/200?random=3"
                                    alt="Image 3"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute w-full h-full bg-black/40 top-full group-hover:top-0 duration-500 flex items-end p-6">
                                    <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
                                    <p className="text-white text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis?</p>
                                </div>
                            </div>
                            <div className="relative group overflow-hidden rounded-4xl h-[400px]">
                                <img
                                    src="https://picsum.photos/600/400?random=4"
                                    alt="Image 4"
                                    className="object-cover w-full h-full"
                                />
                                <div className="absolute w-full h-full bg-black/40 top-full group-hover:top-0 duration-500 flex items-end p-6">
                                    <p className="text-white text-lg">Lorem ipsum dolor sit amet.</p>
                                    <p className="text-white text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container m-auto py-5 px-5 lg:px-0 text-white text-center">
                <Footer/>
               </div>
            </div>
        </>
    )
}