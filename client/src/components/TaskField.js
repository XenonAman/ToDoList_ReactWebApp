import React from 'react';

export default ({ input, meta }) => {
  console.log(meta);
  return(
    <div>
      <input {...input} className="Tinput"/>
    </div>
  );
};
