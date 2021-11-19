import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  width: 100%;
`;
export const ProfileBanner = styled.div`
  .banner-content {
    max-width: 1200px;
    margin: 20px auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${props => props.theme.SecondaryColor};
    height: 250px;
  }
  .profile-img-container {
    width: 150px;
    height: 100px;
  }
  .profile-img {
    width: 100%;
    height: auto;
  }
  .top-content {
    display: flex;
    justify-content: center;
    flex-direction: column;
    .first-content {
      display: flex;
      align-items: center;
      width: 100%;
    }
    .second-content {
      width: 700px;  
    }
    button {
      margin: 0 10px;
      padding: 6px;
      border: 1px solid rgba(var(--ca6,219,219,219),1);
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.SecondaryColor};
      }
    }
  }
  .mid-content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }
`;
export const PostMenu = styled.div`
  .mypost-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
  }
  .card {
    margin: 0 10px;
  }
  .post-link {
    text-decoration: none;
    color: ${props => props.theme.White};
    .title {
      background: rgba(0, 0, 0, 0.6);
    }
  }
  .card-img {
    width: 500px;
    height: 200px;
  }
  .post-img {
    width: 100%;
    height: auto;
  }
`;
