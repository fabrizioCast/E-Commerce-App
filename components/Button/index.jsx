import Image from "next/image";
import { ButtonWrapper } from "./styles";

/**
 *
 * @param {string} bgColor - Background color of the button
 * @param {string} hoverBgColor - Background color of the button when hovered
 * @param {string} textColor - Text color of the button
 * @param {string} radius - Radius of the button
 * @returns Button component
 */

const Button = ({
  children,
  bgColor,
  hoverBgColor,
  textColor,
  radius,
  onClick,
  logo,
}) => {
  return (
    <ButtonWrapper
      bgColor={bgColor}
      hoverBgColor={hoverBgColor}
      textColor={textColor}
      radius={radius}
      onClick={onClick}
    >
      {logo && <Image src={logo} width={20} height={20} alt="Logo" />}
      {children || "Text Example"}
    </ButtonWrapper>
  );
};

export default Button;
