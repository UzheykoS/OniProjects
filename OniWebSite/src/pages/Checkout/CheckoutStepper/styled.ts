import styled from 'styled-components';
import { TextField, TextFieldProps, makeStyles } from '@material-ui/core';
import { BREAKPOINT } from '@constants';

export const MainWrapper = styled.div`
  display: flex;
  margin: 20px 50px;
  flex-direction: column;
  width: 100%;
  @media (max-width: ${BREAKPOINT}) {
    margin: 10px;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  width: 100%;
`;

export const FormRowWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const TextFieldStyled = styled(TextField)<TextFieldProps>`
  margin: 12px 5px;
` as typeof TextField;

export const useStyles = makeStyles({
  formHelperText: {
    position: 'absolute',
    bottom: '-22px',
  },
});
