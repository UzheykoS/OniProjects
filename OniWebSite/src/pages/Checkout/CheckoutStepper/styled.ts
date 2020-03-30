import styled from 'styled-components';
import { TextField, TextFieldProps, makeStyles } from '@material-ui/core';

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

export const FormRowWrapper = styled.div`
  display: flex;
`;

export const TextFieldStyled = styled(TextField)<TextFieldProps>`
  margin: 20px 5px;
` as typeof TextField;

export const useStyles = makeStyles({
  formHelperText: {
    position: 'absolute',
    bottom: '-22px',
  },
});
