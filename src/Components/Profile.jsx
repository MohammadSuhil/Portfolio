
import profileImage from '../assets/2.png';
import defaultImage from '../assets/2.png';

export default function Userprofile(){
    return <div className="flex flex-wrap p-2 gap-4">
        <div className="flex flex-grow basis-72 items-center justify-center w-1/2 md:justify-end">
            <div className='rounded-full max-w-72'>
                  <img className = "rounded-full max-w-1/2 h-auto object-fill p-5" src={profileImage} alt={defaultImage} />
            </div>
        </div>
        <div className="flex flex-col flex-grow basis-72 gap-0 items-center md:items-start lg:items-Start justify-center">
            <div>
                <h1>
                    <strong className = "mb-[-1px] block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-stone-100">Mohammad Suhil</strong>
                </h1>
            </div>
            <div>
                    <h4 className="mb-[-5px] block mt-0 font-sans text-base antialiased font-normal leading-relaxed text-stone-200">Software Engineer</h4>
            </div>
            <div>
                    <h6 className="mb-[-5px] block mt-0 font-sans text-base antialiased font-normal leading-relaxed text-stone-200">PH : 9663775120</h6>
            </div>
            <div>
                    <h6 className="mb-[-5px] block mt-0 font-sans text-base antialiased font-normal leading-relaxed text-stone-200">Email : mohammadsuhil24@gmail.com</h6>
            </div>
        </div>
    </div>
}