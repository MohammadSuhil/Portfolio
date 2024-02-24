import { useEffect, useRef } from 'react';
import PropTypes from "prop-types";
// import { projectData } from '../assets/SkillConstants';

const ProjectsData = (props) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.backgroundImage = "url('" + props.url + "')";
    }
  }, [props.url]);

  return (
    <div
      ref={cardRef}
      className="card bg-no-repeat bg-center bg-cover w-full h-[250px]"
    >
      <div className="card-img-top h-1/2"></div>
      <div className="card-body bg-transparent">
        <h3 className="card-title mb-1">
          <strong>{props.cardTitle}</strong>
        </h3>
        <p className="card-text">
          {props.text}
        </p>
      </div>
    </div>
  );
};

ProjectsData.propTypes = {
  url: PropTypes.string.isRequired,
  cardTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

ProjectCard.propTypes = {
  projectData: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      cardTitle: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default function ProjectCard(props) {
  return (
    <>
      {props.projectData.map((items, index) => (
        <ProjectsData key={index} {...items} />
      ))}
    </>
  );
}
