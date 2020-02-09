import styled from 'styled-components';
import { Col } from 'react-bootstrap';
import React from 'react';

export const MacaronsWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 50px 0 50px 0;
`;

export const MacaronsHeader = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
  flex-direction: column;
`;

export const MacaronsInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding-right: 20px;
  .title {
    color: rgba(0, 0, 0, 0.6);
    font-size: 28px;
    border-bottom: 1px solid rgb(206, 0, 88);
    margin-right: 10px;
    text-transform: uppercase;
  }
  .description {
    color: rgba(0, 0, 0, 0.6);
    font-size: 15px;
    padding-top: 20px;
  }
`;

export const MacaronsMixSection = styled.div`
  display: flex;
  justify-content: center;
  width: 327px;
  height: 270px;
  flex-direction: column;
  align-items: center;
  .macarons-mix-photo {
    img {
      width: auto;
      height: 200px;
    }
  }
  .single-section-info {
    display: flex;
    flex-direction: column;
    padding: 0px 0px 0px 5px;
    .price {
      display: flex;
      color: rgb(206, 0, 88);
      .value {
        font-size: 34px;
        font-weight: 500;
      }
      .currency {
        font-size: 16px;
        padding: 19px 0px 0px 3px;
      }
    }
    .quantity {
      color: rgba(0, 0, 0, 0.6);
      font-size: 18px;
      line-height: 14px;
      padding-left: 1px;
    }
  }
`;

interface IColumn {
  bordered: boolean;
}
export const Column = styled(({ bordered, ...rest }: any) => <Col {...rest} />)<
  IColumn
>`
  padding: 0;
  margin-top: -1px;
  ${({ bordered }) =>
    bordered &&
    `
    border: 1px solid #cccccc;
    border-right: 0px;
    &:last-child {
      border-right: 1px solid #cccccc;
    }`}
`;
