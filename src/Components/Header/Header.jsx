import React from "react";

import Button from "@mui/material/Button";
import { useAuthStatus } from "../../services/auth/authService"

import { StyledHeader, HeaderNav, HeaderUl, HeaderLi } from "./HeaderStyles";

const Header = () => {
  const { isAuthenticated } = useAuthStatus(); 
  return (
    <div>
      {isAuthenticated ? (
        <StyledHeader>
          <HeaderNav>
            <HeaderUl>
              <HeaderLi>
                <h2>FK Trelleborg</h2>
              </HeaderLi>
              <HeaderLi>
                <Button variant="text">Kalender</Button>
              </HeaderLi>
            </HeaderUl>
          </HeaderNav>
        </StyledHeader>
      ) : null}
    </div>
  );
};

export default React.memo(Header);
