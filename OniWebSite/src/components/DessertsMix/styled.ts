import styled from 'styled-components';

export const MixSection = styled.div`
  display: flex;
  justify-content: space-between;
  /* width: 327px; */
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
