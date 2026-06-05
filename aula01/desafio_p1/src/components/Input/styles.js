import styled, { css } from "styled-components";

export const Div = styled.div`
  width: 100%;
  max-width: 40rem;

  ${(props) =>
    props.type === "wrapper" &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
    `}

  ${(props) =>
    props.type === "container" &&
    css`
      position: relative;
      margin: 0.8rem 2rem;
    `}

  ${(props) =>
    props.type === "highlight" &&
    css`
      position: absolute;
      bottom: 0;
      left: 0;
      height: 0.2rem;
      width: 0;
      background-color: var(--orange);
      transition: width 0.3s ease;
    `}

    ${(props) =>
    props.type === "forgot" &&
    css`
      margin-top: -1rem;

      & a {
        font-weight: 900;
        text-decoration: none;
        color: var(--light-grey);
        text-transform: uppercase;
        font-size: 1rem;
        transition: color 0.2s ease;

        &:hover {
          color: var(--white);
        }
      }
    `}
`;

export const Label = styled.label`
  position: absolute;
  top: 0.8rem;
  left: 0;
  font-size: 1.6rem;
  color: var(--white);
  pointer-events: none;
  transition: all ease-in-out 0.2s;
  transform-origin: left top;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.8rem;
  font-size: 1.6rem;
  border: none;
  border-bottom: 0.2rem solid var(--light-grey);
  outline: none;
  color: var(--white);
  background-color: transparent;

  transition: all ease-in-out 0.5s;

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    top: -1.2rem;
    font-size: 1.2rem;
    color: var(--orange);
  }

  &:focus ~ ${Div}[type="highlight"] {
    width: 100%;
  }
`;
