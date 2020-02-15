/* eslint-disable jsx-a11y/html-has-lang */
import React, {useState, useEffect, useRef} from 'react'; 
import ContentEditable from 'react-contenteditable';
import {FaBold, FaItalic , FaAlignCenter, FaAlignLeft, FaAlignRight} from 'react-icons/fa';

import { Container, Header, Content, ContentCode } from './styles';

export default function Editor() {
  const [content, setContent] = useState('');
  const [bold, setBold] = useState(false);
  const [italic, setItalic] = useState(false);
  const [align, setAlign] = useState('left');
  const [showCode, setShowCode] = useState(false);

  const editor = useRef();
  
  function toggleCode(){
    setShowCode(!showCode);
  }

  return (
    <Container>
      <Header>
        <label className="bold">
          <input type="checkbox" name="bold"/>
          <span className="icon"><FaBold /></span>
        </label>
        
        <label className="italic">
          <input type="checkbox" name="italic"/>
          <span className="icon"><FaItalic /></span>
        </label>
        
        <div className="align">
          <label className="left">
            <input type="radio" name="align" value="left"/>
            <span className="icon"><FaAlignLeft /></span>
          </label>
          <label className="center">
            <input type="radio" name="align" value="center"/>
            <span className="icon"><FaAlignCenter /></span>
          </label>
          <label className="right">
            <input type="radio" name="align" value="right"/>
            <span className="icon"><FaAlignRight /></span>
          </label>
        </div>
      </Header>
      <Content>

      <ContentEditable 
        className="editor"
        style={{display:showCode?'none':'block'}}
        contentEditable="true"
        ref={editor}
        onChange={(e)=> setContent(e.target.value)}
        html={content}
        resizable="true" />
      
      <ContentCode 
        className="editorCode"
        style={{display:showCode?'block':'none'}}
        value={content}
        onChange={(e)=> setContent(e.target.value)} />
        </Content>
      <button onClick={() => {toggleCode()}}>Teste</button>
    </Container>
  );
}