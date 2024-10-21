import { Card } from "react-bootstrap";
import { skillsContent } from "../../styles";

import { useState, useRef, useEffect } from "react";

const SkillsCard = ({ title, skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [heights, setHeights] = useState({});
  const skillRefs = useRef({});

  useEffect(() => {
    const newHeights = {};

    Object.keys(skillRefs.current).forEach((key) => {
      newHeights[key] = skillRefs.current[key].scrollHeight;
    });

    setHeights(newHeights);
  }, []);

  const renderSubSkills = (subSkills, skillName) => {
    return (
      <ul
        className={`d-flex flex-column gap-2 sub-skills ${
          hoveredSkill === skillName ? "sub-skills-show" : ""
        }`}
        ref={(el) => (skillRefs.current[skillName] = el)}
        style={{
          height:
            hoveredSkill === skillName ? `${heights[skillName]}px` : "0px",
        }}
      >
        {subSkills.map((subSkill, index) => (
          <li style={{ cursor: "default" }} key={index}>
            {subSkill}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <Card
      className="container d-flex flex-column align-items-center p-3"
      style={skillsContent}
    >
      <h3>{title}</h3>
      <ul className="d-flex flex-column gap-2">
        {skills.map(({ name, subSkills = [] }, index) => (
          <li
            style={{ cursor: "default" }}
            key={index}
            onMouseEnter={() => subSkills.length > 0 && setHoveredSkill(name)}
            onMouseLeave={() => subSkills.length > 0 && setHoveredSkill(null)}
          >
            {name}
            {renderSubSkills(subSkills, name)}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default SkillsCard;
