import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  margin: 5rem 30%;
  justify-content: center;
`;

export const Input = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 15px;
  color: blueviolet;
  padding-left: 1rem;
  font-size: 1.2rem;
  border: none;
  border-bottom: 3px solid blueviolet;

  &::placeholder {
    color: blueviolet;
  }
`;

export const Button = styled.button`
  width: 300px;
  margin: 1rem auto;
  padding: 1rem;
  border: 3px solid blueviolet;
  border-radius: 15px;
  background: white;
  color: blueviolet;
  font-size: 1.2rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 1px blueviolet;
  }
`;
