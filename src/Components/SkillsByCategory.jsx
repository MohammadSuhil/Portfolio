import skill from "../assets/SkillConstants"
import PropTypes from 'prop-types';

const MapSkills = (props) => (
    <div className="card p-2 bg-slate-100">
        <div className="card-header mb-[-1px] p-0 block font-sans text-xl antialiased font-normal leading-snug tracking-normal text-stone-700">
             <h3>{props.category}</h3>
        </div>
        <ul className="list-group list-group-flush mb-[-5px] mt-0 font-sans text-base antialiased font-normal leading-relaxed text-stone-900">
            {props.skill.map((skill, index) => (
            <li key={index}>{skill}</li>
             ))}
        </ul>
    </div>
  );
  
  MapSkills.propTypes = {
    category: PropTypes.string.isRequired,
    skill: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
export default function SkillsWithCategory(){
    return <>
            <div className="">
                <div className="w-full h-150px mb-[-1px] block font-sans text-xl antialiased font-normal leading-snug tracking-normal text-stone-900">
                    <h3>
                        <strong>Skills</strong>
                    </h3>
                </div>
                <div className="flex flex-wrap gap-4">
                         {skill.map((item, index) => (
                            <MapSkills key={index} {...item} />
                            ))}
                </div>
            </div>
    </>
}

