import { useRouteError, Link } from "react-router-dom";
import styled from "styled-components";
import { SectionContainer, Title, Description } from "../components/Helper"

const ErrorContainer = styled.div`
  font-size: 0.8rem;
  color: lightgray;
  margin: 30px;
`;

const ReturnLink = styled(Link)`
  text-decoration: none;
  color: purple;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: magenta;
  }
`;

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return(
    <SectionContainer>
      <Title>Oops!</Title>
      <Description>Looks like an unexpected error occured...</Description>
      <ErrorContainer>{error.statusText || error.message}</ErrorContainer>
      <ReturnLink to="/Portfolio">Back to Home Page</ReturnLink>
    </SectionContainer>
  );
}