import Image from "next/image";
import styled from "styled-components";

export const AccountProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 50px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileImage = styled(Image)`
  border-radius: 50%;
  border: 1px solid #444c56 !important;
`;

export const ProfileImageWrapper = styled.div`
  width: 200px;
  height: 200px;

  @media (min-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

export const ProfileName = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;
