import styled from "styled-components";
import { Link } from "@reach/router";

const MenuItem = styled(Link)`
  text-decoration: none;
  margin-bottom: 20px;
  text-transform: uppercase;
  font-weight: 600;
  color: ${(props) => (props.active === "true" ? "black" : "grey")};
  transition: color 0.6s;

  :hover {
    color: black;
  }
`;

export default MenuItem;
