import landingImage from '../assets/mob1.webp'

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col  gap-5 text-center">
                <h1 className="text-5xl font-bold tracking-tight text-orange-600">
                    Tuck into a takway today
                </h1>
                <span className="text-xl"> food is just a click away</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} />
                <div className="flex flex-col items-center justify-center gap-4 text-center"></div>
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeaway even faster
                </span>
                <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </span>
            </div>
        </div>
    )
}

export default HomePage 