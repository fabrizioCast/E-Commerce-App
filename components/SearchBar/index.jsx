// React
import { useRef } from "react";

// Next JS
import Image from "next/image";

// Styled Components
import { SearchBarContainer, SearchBarInput } from "./styles";

const SearchBar = () => {
  const input = useRef();

  const handleFocus = () => input.current.focus();

  return (
    <SearchBarContainer onClick={handleFocus}>
      <Image src="/icons/search.svg" width={20} height={20} alt="Search" />
      <SearchBarInput type="text" placeholder="Buscar..." ref={input} />
    </SearchBarContainer>
  );
};

export default SearchBar;
