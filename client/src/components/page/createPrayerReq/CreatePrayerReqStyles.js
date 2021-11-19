import styled from 'styled-components';

export const CreatePrayerRequestWrapper = styled.div`
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }

  .main-modal {
    position: fixed;
    background: white;
    width: 400px;
    height: 340px;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border-radius: 4px;
  }

  .display-block {
    display: block;
  }

  .display-none {
    display: none;
  }
  
  .background-form {
    width: 100%;
  }
  
  .prayer-request-form {
    width: 100%;
    padding: 20px;
    input {
      margin: 14px 0;
      width: 100%;
      padding: 8px;
      border: 1px solid ${props => props.theme.SecondaryColor};
      border-radius: 4px;
    }
    button {
      background-color: ${props => props.theme.SecondaryColor};
      border-radius: 4px;
      border: none;
      padding: 8px;
      margin: 10px 0;
      width: 100%;
      cursor: pointer;
    }
  }
  
  .close-btn {
    margin: 0 20px;
    background-color: ${props => props.theme.SecondaryColor};
    border-radius: 4px;
    border: none;
    padding: 7px;
    cursor: pointer;
  }
  
  .flex-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.SecondaryColor};
    i {
      cursor: pointer;
    }
  }
`;
