import burger from '../assets/burger.jpg'

const Hero = () => {
    return(
        <div>
            <img src={burger} alt="" className="w-full max-h-[600px] object-cover" />
        </div>
    )
}

export default Hero