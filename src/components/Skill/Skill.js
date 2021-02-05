import React from 'react';

const Skill = ({ iconClass, color, text }) => {
  return (
    <div>
      <i className={iconClass} style={{ color: color }}></i>
      <h3>{text}</h3>
    </div>
  );
};

export default Skill;
