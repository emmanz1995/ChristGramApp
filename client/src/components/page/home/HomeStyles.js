import styled from 'styled-components';

export const HomeWrapper = styled.div`
  height: 100%;
`;
export const SubPosts = styled.div`
  background-color: ${props => props.theme.White};
  height: 120px;
  width: 100%;
  border: 1px solid ${props => props.theme.SecondaryColor};
  border-radius: 4px;
  max-width: 968px;
  margin: 20px auto;
  .sub-posts-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
  .sub-image-container {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 100%;
    width: 100%;
  }
  .sub-image {
    width: 100%;
    height: auto;
    border-radius: 50%;
    padding: 10px;
  }
  @media screen and (max-width: ${props => props.theme.mobile}) {
    .sub-posts-content {
      width: 100%;
      display: flex;
      overflow-y: auto;
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      .sub-image {
        width: 100px;
        height: 100px;
      }
    }
  }
`;

export const MainPosts = styled.div`
  .post-content {
    max-width: 968px;
    margin: 20px auto;
  }
  .card {
    margin: 40px 0;
    //height: 100px;
    width: 100%;
    border: 1px solid ${props => props.theme.SecondaryColor};
    border-radius: 4px;
    background-color: #fff;
  }
  .img-container {
    width: 100%;
    height: 100%;
  }
  .img-thumbnail {
    width: 100%;
    height: auto;
  }
  .author-flex {
    p {
      margin: 0 10px;
    }
    i {
      margin: 0 5px;
    }
  }
  .padding {
    padding: 5px 20px;
  }
  form {
    width: 100%;
    padding: 20px;
    input {
      border: none;
      width: 100%;
      border-bottom: 1px solid ${props => props.theme.SecondaryColor};
      background-color: transparent;
      &:focus {
        outline: none;
      }
    }
  }
`;
