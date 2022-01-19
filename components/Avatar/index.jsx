import { AvatarImage } from "./styles";

const Avatar = ({ src, alt }) => {
  return (
    <>
      <AvatarImage src={src} alt={alt} height={60} width={60} />
    </>
  );
};

export default Avatar;
