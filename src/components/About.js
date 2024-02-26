import AboutImg from '../assets/about.png'
export default function About(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5' id='about'>
        <div className='md:w-1/2 '>
            <img className='py-5' src={AboutImg}></img>
        </div>
        <div className='md:w-1/2  flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5' >My Name is Deepu AJ,I am a Full Stack developer.I built beautiful websites with React JS and Tailwind CSS</p>
            <p className='pb-5'>I am proficient in Frontend skills like React,Redux,Axios,Bootstrap,CSS and many more</p>
            <p>In Backend I know Node JS,Express JS,MongodB and Mongoose</p>
            </div>
           
        </div>
    </section>
}