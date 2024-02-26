import resumeImg from '../assets/resume (1).jpg'
export default function Resume(){
    return <section className='flex flex-col md:flex-row bg-secondary px-5'id='resume'>
        <div className=' py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={resumeImg}></img>
        </div>
        <div className='md:w-1/2  flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className='text-4xl  border-b-4 border-primary mb-2 w-[140px] font-bold'>Resume</h1>
            <p className='pb-3' >You can view my resume </p>
            <a target='_blank' className='button' href='https://github.com/DeepuAJ07/Deepu-AJ-Resume/blob/main/MERN%20Stack%20Trainee%20(1)-1.pdf'>Download</a>
            
            </div>
           
        </div>
    </section>
}