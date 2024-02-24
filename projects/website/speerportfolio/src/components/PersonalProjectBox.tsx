import React, { FunctionComponent } from 'react';
import '../App.css';
import Box from '../components/Box'


const PersonalProjectBox: FunctionComponent<{
  title: string;
  subtitle: string;
  tools: string;
  context: string;
  color: 'gray' | 'blue' | 'dark_gray' | 'light_gray' | 'transparent';
  children?: any;
}> = ({ title, subtitle, tools, color, context, children }) => {
  return (
    <>
      <Box color={color} corners='roundest'>
        <h1>
          {title}
        </h1>
        <h2>
          {subtitle}
        </h2>
        <h3>Tools Used:</h3>
        <p>
          {tools}
          <br />
          <br />
        </p>
        <h3>Context:</h3>
        <p>
          {context}
        </p>
        {children}
        <br />

      </Box>
      <br />
    </>
  );
}
export default PersonalProjectBox;
