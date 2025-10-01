import { Navbar } from "../components/Navbar";
import {Footer} from "../components/Footer"
export function AboutPage() {
    return (
        <div className="min-h-screen bg-black text-white">
            <div className="container mx-auto px-4 py-8 lg:py-16">
                <Navbar/>
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-10">
                    <div className="w-full h-full flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <div className="text-center">
                                <img src="/public/images/banner-image.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 space-y-6">
                        <div className="space-y-4">
                            <p className="text-orange-400 tracking-[0.3em] text-xs lg:text-sm uppercase">
                                Cook With Us
                            </p>

                            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                                Cooking together with the expert.
                            </h1>
                        </div>

                        <div className="space-y-4 text-gray-400">
                            <p className="text-sm lg:text-base leading-relaxed">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
                            </p>

                            <p className="text-sm lg:text-base leading-relaxed">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium....
                            </p>
                        </div>

                        <div className="pt-4">
                            <button className="bg-gradient-to-r from-orange-400 to-red-400 hover:from-orange-500 hover:to-red-500 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Learn more
                            </button>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>

            <div className="hidden lg:block fixed bottom-8 right-8 text-8xl opacity-80 animate-bounce" style={{ animationDelay: '1.5s' }}>
                🍳
            </div>
        </div>
    );
}