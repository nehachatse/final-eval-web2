import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: black;
  position: relative;
  height: 5rem;
  color: white;
`;

export const Button = styled.button`
  color: white;
  text-align: center;
  top: 1rem;
  right: 1rem;
  border: 2px solid blueviolet;
  border-radius: 10px;
  padding: 1rem;
  float: right;
  background: black;
  position: absolute;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 2px 10px blueviolet;
  }
`;
