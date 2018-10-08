import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  color: white;

  /* Pass variables as inputs */
  padding: ${padding};

  /* Adjust the background from the properties */
  background: ${props => props.background};
`;

export default props => {
  return <Section {...props} />;
};
