import React, { FC } from "react";
import { StyledNavigation } from "./styled";
import { NavigationProps } from "./types";

const Navigation: FC<NavigationProps> = ({text}) => {
  return(
    <StyledNavigation>{text}</StyledNavigation>
  )
}

export default Navigation;
