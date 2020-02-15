import React from 'react';
import { Container, Title } from './styles';
import './global.css';

import Editor from './Editor';

function App() {
  return (
    <Container>
      <Title>React Editor</Title>

      <Editor />
    </Container>
  );
}

export default App;
