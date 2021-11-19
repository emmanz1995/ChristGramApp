import styled from 'styled-components';

export const SigninWrapper = styled.div`
  width: 100%;
`;
export const SigninContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;
export const BackgroundForm = styled.div`
  height: 450px;
  width: 350px;
  background-color: ${props => props.theme.White};
  border-radius: 4px;
`

export const SigninForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 50px;
  .signin-title {
    color: #000;
  }
  .form-input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 4px;
    background-color: ${props => props.theme.SecondaryColor};
  }
  .form-button {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    cursor: pointer;
    background-color: rgba(var(--d69,0,149,246),1);
    border-radius: 4px;
  }
  .or-section {
    display: flex;
    justify-content: center;
  }
  .register-forget-container {
    width: 100%;
    text-align: center;
  }
  .forget-password-link {
    color: #000;
    text-align: center;
    text-decoration: none;
  }
  .register-button-link {
    text-align: center;
    text-decoration: none;
    color: blue;
  }
`;
