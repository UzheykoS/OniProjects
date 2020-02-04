import styled from 'styled-components';

export const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  margin: 80px 0px;
  justify-content: center;
`;

export const ImageSection = styled.div`
  img {
    width: 500px;
    height: auto;
  }
`;

export const TextSection = styled.div`
  width: 500px;
  padding-left: 60px;
  font-size: 15px;
  h2 {
    line-height: 27px;
    margin-bottom: 20px;
    font-weight: 600;
    padding-bottom: 10px;
    font-size: 20px;
    color: #6b6b6b;
    font-family: 'Open Sans';
  }
  p {
    color: #6b6b6b;
    font-weight: 400;
    font-family: 'Open Sans';
    line-height: 21px;
  }
`;

export const ImagesContainer = styled.div`
  margin-bottom: 25px;
`;

export const BackgroundImage = styled.img`
  height: auto;
  width: 100%;
`;
