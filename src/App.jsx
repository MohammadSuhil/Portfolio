import './App.css'
import Userprofile from './Components/Profile'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import { projectData, projectData1 } from './assets/SkillConstants';

function App() {

  return (
    <>
      <header className='bg-slate-100 p-6'></header>
      <section className='bg-slate-900'>
        <div className=''>
            <Userprofile />
        </div>
      </section>
      <section className='bg-slate-100'>
        <div className='flex flex-wrap items-center justify-center'>
            <Skills/>
        </div>
      </section>
      <section className='bg-slate-900'>
                
        <div className='flex flex-wrap items-center justify-center'>
                <div className="w-full flex flex-wrap items-start justify-start max-w-[1200px] pl-9 pb-2 pt-9 font-sans text-xl antialiased font-normal
                 leading-snug tracking-normal text-stone-100">
                    <h3><strong>Projects</strong></h3>
                </div>
           <Projects projectData = {projectData}/>
        </div>
      </section>
      <section className='bg-slate-100'>
        <div className='flex flex-wrap items-center justify-center'>
           <Projects projectData = {projectData1}/>
        </div>
      </section>
    </>
  )
}

export default App
