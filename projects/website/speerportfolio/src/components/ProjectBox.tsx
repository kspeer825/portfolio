import React, { FunctionComponent } from 'react';
import '../App.css';
import Box from '../components/Box'


const ProjectBox: FunctionComponent<{
  title: string;
  tools: string;
  description: string;
}> = ({ title, tools, description }) => {
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
        </p>
      </Box>
      <br />
    </>
  );
}
export default ProjectBox;
