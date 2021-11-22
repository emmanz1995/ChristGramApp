import styled from 'styled-components';

export const CardWrapper = styled.div`
  width: 31.2%;
  background-color: ${props => props.theme.White};
  border: 1px solid ${props => props.theme.SecondaryColor};
  border-radius: 4px;
  margin: 10px 10px;
`;
export const CardHeader = styled.div`
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .delete-btn {
    margin: 0 10px;
    background-color: ${props => props.theme.SecondaryColor};
    border: 1px solid rgba(var(--ca6,219,219,219),1);
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      background-color: white;
      transition: all 0.3s ease-in-out;
    }
  }
`;
export const CardBody = styled.div`
  margin: 10px;
  background-color: ${props => props.theme.SecondaryColor};
  p {
    padding: 10px;
    border-radius: 4px;
  }
`;
