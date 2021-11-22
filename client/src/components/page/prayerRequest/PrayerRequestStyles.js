import styled from 'styled-components';

export const PrayerRequestWrapper = styled.div`
  height: 90vh;
`;

export const PrayerReqBanner = styled.div`
  .main-banner-area {
    max-width: 968px;
    margin: 0 auto;
    border-bottom: 1px solid ${props => props.theme.SecondaryColor};
    height: 250px;
  }
`;

export const SmNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${props => props.theme.White};
  width: 100%;
  padding: 10px;
  border: 1px solid ${props => props.theme.SecondaryColor};
  border-radius: 4px;
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    a {
      text-decoration: none;
      margin: 0 10px;
      background-color: ${props => props.theme.SecondaryColor};
      border: 1px solid rgba(var(--ca6,219,219,219),1);
      padding: 10px;
      border-radius: 4px;
      &:hover {
        background-color: white;
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

export const MainBody = styled.div`
  .prayer-req-area {
    max-width: 968px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    //justify-content: space-between;
    flex-wrap: wrap;
  }
  .no-prayer-found {
    padding: 15px;
    background-color: ${props => props.theme.White};
    width: 200px;
    border-radius: 4px;
    margin: 10px auto;
    text-align: center;
  }
`;


