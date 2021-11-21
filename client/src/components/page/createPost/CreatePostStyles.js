import styled from 'styled-components';

export const CreatePostWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 90vh;
`;

export const BackgroundForm = styled.div`
  height: 630px;
  width: 100%;
  max-width: 968px;
  margin: 0 auto;
  background-color: ${props => props.theme.White};
  border-radius: 4px;
  border: 1px solid ${props => props.theme.SecondaryColor};
`;

export const CreatePostForm = styled.form`
  width: 100%;
  height: 100%;
  padding: 50px;
  .input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid ${props => props.theme.SecondaryColor};
    border-radius: 4px;
    margin: 10px 0;
  }
  .text-area {
    width: 100%;
    border: 1px solid ${props => props.theme.SecondaryColor};
    border-radius: 4px;
  }
  .create-post-btn {
    margin: 10px 0;
    padding: 10px;
    border: 1px solid ${props => props.theme.SecondaryColor};
    border-radius: 4px;
    width: 100%;
    cursor: pointer;
    &:hover {
      background-color: ${props => props.theme.SecondaryColor};
    }
  }
`;
