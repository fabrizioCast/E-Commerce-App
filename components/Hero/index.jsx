// Next JS
import Link from "next/link";

// Components
import HeroLogo from "../Images/HeroLogo";

// Styled Components
import {
  HeroButton,
  HeroSubtitle,
  HeroTextStrong,
  HeroTitle,
  HeroWrapper,
} from "./styles";

const Hero = () => {
  return (
    <HeroWrapper>
      <div>
        <HeroTitle>
          El mayor MarketPlace para <HeroTextStrong>Gamers</HeroTextStrong>
        </HeroTitle>
        <HeroSubtitle>
          Compra y vende articulos gamers entre miles de personas
        </HeroSubtitle>
        <Link href="/tienda">
          <a>
            <HeroButton>Ver Productos</HeroButton>
          </a>
        </Link>
      </div>
      <HeroLogo width="100%" height="100%" />
    </HeroWrapper>
  );
};

export default Hero;
