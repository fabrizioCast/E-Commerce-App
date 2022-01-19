// Next JS
import Link from "next/link";

// Components
import FacebookLogo from "../Images/FacebookLogo";
import InstagramLogo from "../Images/InstagramLogo";
import Logo from "../Images/Logo";

// Styled Components
import {
  FooterLogo,
  FooterSocialMedia,
  FooterSocialMediaItem,
  FooterWrapper,
} from "./styles";

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <FooterLogo>
          <Link href="/">
            <a>
              <Logo height="100%" width={150} />
            </a>
          </Link>
        </FooterLogo>
        <FooterSocialMedia>
          <FooterSocialMediaItem href="#">
            <InstagramLogo height={35} width={35} fill="#fff" />
          </FooterSocialMediaItem>
          <FooterSocialMediaItem href="#">
            <FacebookLogo height={35} width={35} fill="#fff" />
          </FooterSocialMediaItem>
        </FooterSocialMedia>
      </FooterWrapper>
    </>
  );
};

export default Footer;
