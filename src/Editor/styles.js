import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Header = styled.div`
  width: 100%;
  background: #f0f0f0;

  label{
    display:inline-block;
    margin:10px 5px;
  }

  label > input{
    display:none;
  }

  label > input + span{
    padding:5px;
    border: 1px solid #f0f0f0;
  }

  label > input:checked + span{
    border: 1px solid #333;
  }
`;

export const Content = styled.div`
  width: 600px;
  height:300px;
  resize: both;
  min-width:100px;
  min-height:100px;
  
  > * {
    padding: 10px;
    overflow: auto;
    width:100%;
    height:100%;
  }
`;

export const ContentCode = styled.textarea`
`;
