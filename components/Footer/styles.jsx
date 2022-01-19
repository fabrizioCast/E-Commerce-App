import styled from "styled-components";

export const FooterWrapper = styled.footer`
  width: 100%;
  height: 100%;
  padding: 0.5rem 1rem;
  background-color: #25272e;
  display: flex;
  align-items: center;
`;

export const FooterLogo = styled.div`
  flex-grow: 1;
  transition: opacity 0.3s ease-in-out;

  a {
    &:hover {
      opacity: 0.8;
    }
  }
`;

export const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
`;

export const FooterSocialMediaItem = styled.a`
  width: 100%;
  height: 100%;
  color: #fff;
  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.5;
  }
`;
