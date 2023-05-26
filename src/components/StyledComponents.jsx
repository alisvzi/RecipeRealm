import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 0.4rem 0rem;
  @media (max-width: 768px) {
    h3 {
      font-size: 1.5rem;
    }
  }
`;
export const Card = styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 865px) {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 865px) {
    min-height: 10rem;
    font-size: 0.5rem;
  }
`;

export const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0, 0.5));
`;
export const List = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  margin: 2rem 0;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  align-items: center;
  justify-content: center;
`;
export const CardCuisine = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  h4 {
    text-align: center;
    padding: 1rem;
  }
`;
export const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  background: linear-gradient(35deg, #494949, #313131);
  width: 6rem;
  height: 6rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-size: 0.8rem;
    margin-top: 0.5rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-gradient(to right, #f27121, #e94057);
  }
  @media (max-width: 865px) {
    svg {
      font-size: 1.2rem;
    }
    h4 {
      font-size: 0.7rem;
    }
    width: 4.5rem;
    height: 4.5rem;
  }
`;

export const FormStyle = styled.form`
  position: relative;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  div {
    position: relative;
    width: 500px;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  input {
    border: none;
    background: linear-gradient(35deg, #494949, #313131);
    font-size: 1.5rem;
    color: white;
    padding: 1rem 3rem;
    border: none;
    border-radius: 0.5rem;
    outline: none;
    width: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 0%;
    transform: translate(100%, -50%);
    color: white;
  }
`;
export const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  p {
    color: var(--gray-800);
    line-height: 1.25rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
    color: var(--gray-800);
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;

    @media (max-width: 865px) {
      margin-left: 1rem;
    }
  }

  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
  }

  @media (max-width: 1400px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 1120px) {
    img {
      width: 350px;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    .imageWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;
  border-radius: 7px;

  &:hover {
    background: #292828;
    color: white;
  }
`;

export const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 700px;
  max-width: 100%;

  ul {
    margin-top: 0;
  }

  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;
export const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Consolas", cursive;
`;
export const Nav = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  svg {
    font-size: 2rem;
  }
`;
