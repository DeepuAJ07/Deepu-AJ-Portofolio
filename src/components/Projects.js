import ecomwebsiteImg from '../assets/ecommerce-websites (1).jpg'
import websiteImg from '../assets/website-blog.jpg' 
import bankImg from '../assets/food-ecommerce.jpg'
export default function Projects(){
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'>
        <div className="w-1/2">
            <div className="flex flex-col px-10 py-5">
            <h1 className="text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold">Projects</h1>
            <p>These are some of my best projects.I have built these with React,Node,Express JS.Check them out</p>
            </div>

        </div>
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-5'>
                <div className='relative'>
                <img className='h-[200px] w-[500px] ' src={websiteImg}></img>
                <div className='Project-desc'>
                    <p className='text-center px-5 py-5'>A blog website built with HTML,Bootstrap</p>
                    <div className='flex justify-center'>
         <a target='_blank' className='button  ' href='https://github.com/DeepuAJ07/Bootstrap'>View Projects</a>
         </div>
                </div>
                </div>
                <div className='relative'>
                <img className='h-[200px] w-[500px] ' src={ecomwebsiteImg}></img>
                <div className='Project-desc'>
                    <p className='text-center px-5 py-5'>A Ecommerce website built with React JS and Redux</p>
                    <div className='flex justify-center'>
         <a target='_blank' className='button  ' href='https://github.com/DeepuAJ07/Ecommerce'>View Projects</a>
         </div>
                </div>
                </div>
          <div className='relative'>
          <img className='h-[200px] w-[500px] ' src={bankImg}></img>
          <div className='Project-desc '>
          <p className='text-center px-5 py-5'>A Bank web app built with MERN Stack</p>
          <div className='flex justify-center'>
         <a target='_blank' className='button  ' href='https://github.com/DeepuAJ07/React-Bank'>View Projects</a>
         </div>
          </div>
       
          </div>
           
         
            </div>

        </div>
    </section>
}