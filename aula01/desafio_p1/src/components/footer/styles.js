import styled from "styled-components";

export const Footer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2.4rem;
  padding: 2.4rem 24rem;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 2.4rem;
  padding: 0.8rem;
  border-bottom: solid 0.1rem var(--light-grey);
`;

export const Item = styled.li`
  padding: 0.4rem;

  &::after {
    content: "|";
    color: var(--light-grey);
  }
  &:last-child::after {
    content: "";
  }

  & span {
    padding-right: 4rem;
    color: var(--light-grey);
    transition: color ease-in-out 0.2s;
    cursor: pointer;

    &:hover {
      color: var(--white);
    }
  }
`;

export const CopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: var(--light-grey);
`;

export const Logotipo = styled.div`
  display: flex;
  gap: 1.6rem;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  background-color: var(--dark);
  width: 100%;
  max-width: 20rem;
  color: var(--light-grey);
  border: 0.1rem solid var(--light-grey);
  padding: 0.8rem 1.6rem;
  border-radius: 0.4rem;
  appearance: none;
  padding-right: 3.5rem;

  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff640a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
  background-repeat: no-repeat;
  background-position: right 1.2rem center;
  background-size: 1.6rem;
  cursor: pointer;

  transition:
    background-color ease 0.2s,
    border-color ease 0.2s;

  &:open {
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23ff640a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'></polyline></svg>");
  }

  & option {
    display: flex;
    justify-content: flex-start;
    gap: 0.8rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--light-grey);
    padding: 1rem;

    background-color: var(--dark);
    color: var(--light-grey);

    &:hover {
      color: var(--white);
    }
  }
`;

export const LogotipoSvg = styled.svg.attrs({
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 158 12",
})`
  width: 15.8rem;
  height: auto;
`;

export const SonyPicturesPath = styled.path.attrs({
  d: "M1.066 8.446c.658.88 1.756 2.327 5.173 2.327 1.757 0 4.155-.503 4.155-2.28 0-3.476-9.94-.425-9.94-5.065C.455.991 2.697 0 5.802 0c3.01 0 4.86 1.242 5.644 2.343l-1.004.818c-.47-.535-1.568-1.997-4.671-1.997-2.29 0-3.905.597-3.905 2.044 0 3.46 9.94.158 9.94 5.285 0 1.918-1.85 3.507-5.722 3.507C2.352 12 .972 10.443 0 9.358l1.066-.912m18.843 2.327c2.775 0 5.268-1.478 5.268-4.954 0-2.548-1.96-4.655-5.268-4.655s-5.268 2.107-5.268 4.655c0 3.476 2.462 4.954 5.268 4.954zM19.91 0c3.872 0 6.679 2.265 6.679 6.07 0 4.058-3.387 5.93-6.679 5.93-3.292 0-6.679-1.872-6.679-5.93 0-3.805 2.807-6.07 6.68-6.07zm8.496.283h1.96l8.481 9.405V.283h1.38v11.434h-1.38L29.722 1.51v10.207h-1.317V.283m19.58 6.81-5.88-6.81h1.804l4.766 5.583L53.44.283h1.803l-5.88 6.81v4.624h-1.38V7.093m16.178-1.478H69.1c2.29 0 3.45-.488 3.45-2.045 0-1.573-1.16-2.06-3.45-2.06h-4.938v4.105zM62.782.283h6.679c2.305 0 4.405.66 4.405 3.271 0 2.627-2.1 3.287-4.405 3.287h-5.3v4.876h-1.379V.283zm13.043 11.434h1.38V.283h-1.38v11.434zm16.21-3.036C90.812 11.056 88.695 12 85.92 12c-4.42 0-6.506-2.658-6.506-5.977 0-3.931 2.65-6.023 6.491-6.023 2.446 0 4.938.944 5.957 3.271l-1.191.55c-.8-1.871-2.571-2.657-4.75-2.657-3.261 0-5.096 1.777-5.096 5.032 0 2.627 1.772 4.577 5.221 4.577 2.258 0 3.825-.944 4.766-2.69l1.223.598m6.27-7.171h-5.503V.283h12.385V1.51h-5.503v10.207h-1.38V1.51m20.474 5.504c0 4.137-3.214 4.986-5.863 4.986-2.65 0-5.863-.85-5.863-4.986V.284h1.38v6.73c0 2.627 1.677 3.822 4.483 3.822 2.806 0 4.484-1.195 4.484-3.822V.284h1.38v6.73m4.012-1.588h4.89c1.992 0 3.481-.283 3.481-1.966 0-1.667-1.49-1.95-3.48-1.95h-4.891v3.916zM121.41.283h6.584c1.82 0 4.484.393 4.484 3.193 0 2.39-2.21 3.082-3.59 3.145l3.763 5.096h-1.71l-3.668-5.065h-4.483v5.065h-1.38V.283zm13.544 0h10.16V1.51h-8.78v3.648h7.337v1.227h-7.337v4.105h8.967v1.227h-10.347V.283m12.306 8.163c.658.88 1.756 2.327 5.173 2.327 1.756 0 4.155-.503 4.155-2.28 0-3.476-9.94-.425-9.94-5.065C146.65.991 148.891 0 151.995 0c3.01 0 4.86 1.242 5.644 2.343l-1.003.818c-.47-.535-1.568-1.997-4.672-1.997-2.29 0-3.904.597-3.904 2.044 0 3.46 9.94.158 9.94 5.285 0 1.918-1.85 3.507-5.722 3.507-3.732 0-5.111-1.557-6.084-2.642l1.067-.912",
})`
  fill: #a0a0a0;
  fill-rule: "nonzero";
  transition: fill ease-in-out 0.2s;

  & :hover {
    fill: var(--white);
  }
`;
