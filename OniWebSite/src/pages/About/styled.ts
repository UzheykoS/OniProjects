import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 100%;
  font-family: 'Museo Sans Cyrl 500';
  overflow-x: hidden;
`;

export const AboutHeader = styled.div`
  background-color: rgba(113, 50, 155, 0.95);
  width: 100%;
  height: 450px;
  padding-top: 50px;
  padding-left: 77px;
  margin-bottom: 70px;
`;

export const AboutBody = styled.div`
  display: table;
  width: 100%;
`;

export const AboutPhoto = styled.div`
  position: relative;
  margin-left: 20px;
  overflow: hidden;
  img {
    width: 90%;
    height: auto; // position: absolute;
    margin: 20px 0px 20px 0px;
    z-index: 2;
    left: -34px;
    top: -23px;
  }
`;
