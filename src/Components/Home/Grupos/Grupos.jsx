import React from 'react';
import styled from 'styled-components';
import Button from '../../../utility/Button/Button';
import Logo from './bible-study.jpg';
import Fade from 'react-reveal/Fade';

const Container = styled.div`
  margin-top: 30px;

  background: url(${Logo}) center;
  width: 100%;
  height: 370px;
  padding: 20px;
  background-position: center;
  background-size: cover;
  min-height: 300px;
  position: relative;
  z-index: 1;
  text-align: justify;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(191, 212, 45);
    background: linear-gradient(
      90deg,
      rgba(191, 212, 45, 1) 0%,
      rgba(213, 200, 48, 1) 54%,
      rgba(213, 200, 48, 0) 84%
    );
    z-index: -1;
  }
  & h2 {
    color: white;
    text-transform: uppercase;
    font-size: 30px;
  }

  & p {
    color: #eeeeee;
    width: 50%;

    & span {
      font-weight: 700;
      color: white;
    }
  }
`;

const Flex = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Grupos = () => {
  return (
    <Container>
      <Flex>
        <Fade bottom delay={1100}>
          <h2>
            grupos de <br /> crecimiento
          </h2>

          <p>
            Tratemos de ayudarnos unos a otros, y de amarnos y hacer lo bueno.
            No dejemos de reunirnos, como hacen algunos. Al contrario,
            animémonos cada vez más a seguir confiando en Dios, y más aún cuando
            ya vemos que se acerca el día en que el Señor juzgará a todo el
            mundo.
            <span> Hebreos 10:24-25 (TLA)</span>
            <br /> Si aún no cuentas con un grupo de crecimiento, únete a uno
            llenando tu información haciendo clic en el botón.
          </p>

          <Button color="primary" size="bold">
            ir a formulario
          </Button>
        </Fade>
      </Flex>
    </Container>
  );
};

export default Grupos;