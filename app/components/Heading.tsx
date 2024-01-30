import React from 'react';

type HeadingProps = {
  heading?: string;
  classes?: string;
  size?: string;
  content?: any;
};

export default function Heading(props: HeadingProps) {    
  return React.createElement(
    props.heading || 'h1',
    { className: `${props.classes ? props.classes + ' ' : ''}heading${props.size ? ' '+props.size : ''}` },
    props.content
  );
}