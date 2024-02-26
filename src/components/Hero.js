import HeroImg from '../assets/hero.png'
import { AiOutlineInstagram ,AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";

export default function Hero(){
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
  <div className='md:w-1/2 flex flex-col'>
  <h1 className=' text-white text-4xl font-hero-font'>Hi,<br/>Im<span className='text-black'> Deepu AJ</span>
    <p className='text-2xl'>Im a Full-Stack developer</p></h1>
    <div className='flex py-5'>
    <a className='pr-5 hover:text-white' href='https://www.instagram.com/aj_believe_in_yourself/'>
       <AiOutlineInstagram size={50}/>
    </a>
    <a className='pr-5 hover:text-white' href='https://www.facebook.com/deepu.aj1'>
       <AiOutlineFacebook size={50}/>
    </a>
    <a className='hover:text-white' href='https://www.linkedin.com/in/deepu-aj-03818021b/'>
       <AiOutlineLinkedin size={50}/>
    </a>
  </div>
  </div>

    <img className='md:w-1/3' src={HeroImg}/>
    </section>
}