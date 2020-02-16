import styled from 'styled-components';

export const MacaronsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 300px 50px 500px;
`;

export const MacaronsTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const MacaronsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
`;

export const MacaronsMixSection = styled.div`
  display: flex;
  justify-content: space-between;
  width: 327px;
  height: 360px;
  flex-direction: column;
  align-items: center;
  img {
    width: auto;
    height: 250px;
    padding-top: 20px;
  }
  .title {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .price {
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    height: 48px;

    .half {
      width: 50%;
    }
  }
`;
