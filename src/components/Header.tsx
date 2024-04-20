// Header.tsx
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

const Title = styled.h1`
  margin: 0;
`;

const SearchInput = styled.input`
  padding: 8px;
  margin-top: 10px;
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Title>Dynamic Front Page</Title>
      <SearchInput type="text" placeholder="Search..." />
    </HeaderContainer>
  );
}

export default Header;

