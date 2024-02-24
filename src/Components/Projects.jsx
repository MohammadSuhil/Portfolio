import ProjectCard from './ProjectCard';
import PropTypes from "prop-types";

export default function Projects(props){
   
    return <>

        <div className='p-9 pt-6 w-full max-w-[1200px]'>

                <div className="grid grid-col-1 gap-6 w-full md:grid-cols-3">
                    
                    <ProjectCard projectData={props.projectData} />
                    
                </div>

        </div>
            
    </>
}

Projects.propTypes = {
    projectData: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        cardTitle: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  };