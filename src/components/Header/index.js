import React from "react";
import { Link } from "gatsby";

import Wrapper from "./Wrapper";
import logo from "../../images/logo.svg";

const url = 'http://dkan';

const Header = () => (
  <Wrapper className="container-fluid">
    <div className="branding">
      <Link className='logo' to="/"><img alt="logo" src={logo}/></Link>
    </div>
  </Wrapper>
);

export default Header;
