import styled, { css } from "styled-components";

export const Div = styled.div`
  display: flex;
  width: 100%;
  gap: 0.8rem;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled.input.attrs((props) => ({
  type: props.type || "button",
}))`
  cursor: pointer;
  background-color: transparent;

  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.2rem;

  width: 100%;
  max-width: 40rem;
  height: 100%;

  padding: 1rem 0.4rem;
  border-radius: 32rem;

  transition:
    border-color ease-in-out 0.2s,
    background-color ease-in-out 0.2s,
    color ease-in-out 0.3s;

  border: ${(props) =>
    props.login ? "solid 0.1rem var(--light-grey)" : "none"};
  color: ${(props) => (props.login ? "var(--light-grey)" : "var(--orange)")};

  &:hover {
    color: var(--dark-orange);
  }

  ${(props) =>
    props.login &&
    css`
      &:hover {
        background-color: var(--orange);
        border: solid 0.1rem var(--orange);
        color: var(--white);
      }

      &:disabled {
        background-color: transparent;
        border: solid 0.1rem var(--light-grey);
        color: var(--light-grey);
        opacity: 0.5;
        cursor: not-allowed;
      }
    `}
`;
