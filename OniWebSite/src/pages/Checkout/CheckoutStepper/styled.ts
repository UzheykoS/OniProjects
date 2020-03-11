import styled from 'styled-components';
import { TextField, TextFieldProps } from '@material-ui/core';

export const MainWrapper = styled.div`
  display: flex;
  margin: 50px;
  flex-direction: column;
  width: 100%;
`;

export const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
`;

export const FormColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`;

export const FormRowWrapper = styled.div`
  display: flex;
`;

export const TextFieldStyled = styled(TextField)<TextFieldProps>`
  margin: 20px 5px;
` as typeof TextField;
