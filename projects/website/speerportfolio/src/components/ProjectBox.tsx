import React, { FunctionComponent } from 'react';
import '../App.css';
import Box from '../components/Box'


const ProjectBox: FunctionComponent<{
  title: string;
  tools: string;
  description: string;
  impact: string;
}> = ({ title, tools, description, impact }) => {
  return (
    <>
      <Box color='dark_gray' corners='roundest'>
        <h3>
          {title}
        </h3>
        <p>
          Tools Used:
          <br />
          {tools}
          <br />
          <br />
          Description:
          <br />
          {description}
          <br />
          <br />
          Impact:
          <br />
          {impact}
        </p>
      </Box>
      <br />
    </>
  );
}
export default ProjectBox;
