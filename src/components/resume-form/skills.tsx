import React from "react";
export const Skills = ({ skill }) => {
  return (
    <>
      <span className="inline-block bg-transparent text-white text-sm border border-white-500 disabled rounded p-1 mb-1 ml-1">
        {skill}
      </span>
    </>
  );
};

export default Skills;
