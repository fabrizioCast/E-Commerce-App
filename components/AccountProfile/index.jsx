// Components
import AccountLastPosts from "../AccountLastPosts";

// Styled Components
import {
  AccountProfileWrapper,
  ProfileImage,
  ProfileImageWrapper,
  ProfileInfo,
  ProfileName,
} from "./styles";

const AccountProfile = ({ lastPosts, user }) => {
  const { displayName, photoURL } = user;

  return (
    <AccountProfileWrapper>
      <ProfileInfo>
        <ProfileImageWrapper>
          <ProfileImage
            src={photoURL}
            width="200"
            height="200"
            layout="responsive"
            alt="Profile"
            priority
          />
        </ProfileImageWrapper>

        <ProfileName>{displayName}</ProfileName>
      </ProfileInfo>
      <AccountLastPosts lastPosts={lastPosts} />
    </AccountProfileWrapper>
  );
};

export default AccountProfile;
