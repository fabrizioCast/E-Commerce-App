// Components
import Joystick from "../Images/Joystick";

// Styled Components
import { AboutTitle, AboutWrapper } from "./styles";

const About = () => {
  return (
    <AboutWrapper>
      <Joystick width="100%" height="100%" />
      <div>
        <AboutTitle>About</AboutTitle>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima
          veritatis corrupti harum soluta. Velit, ut cumque atque voluptatum sit
          id porro quis soluta deleniti veritatis modi optio, et exercitationem
          corporis. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Minima veritatis corrupti harum soluta. Velit, ut cumque atque
          voluptatum sit id porro quis soluta deleniti veritatis modi optio, et
          exercitationem corporis. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Minima veritatis corrupti harum soluta. Velit, ut
          cumque atque voluptatum sit id porro quis soluta deleniti veritatis
          modi optio, et exercitationem corporis. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Modi, veritatis nemo debitis natus velit
          quaerat numquam quas exercitationem. Dolorum voluptatum alias
          explicabo cupiditate temporibus aperiam maiores doloribus fuga
          obcaecati incidunt.
        </p>
      </div>
    </AboutWrapper>
  );
};

export default About;
