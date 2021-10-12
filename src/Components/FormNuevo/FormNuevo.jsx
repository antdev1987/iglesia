import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import FormFooter from '../../utility/formFooter/FormFooter';
import FormHeader from '../../utility/formHeader/FormHeader';
import Input from '../../utility/Input/Input';
import emailjs from 'emailjs-com';
import Button from '../../utility/Button/Button';
import { ValidacionNombre } from '../Validaciones/ValidacionNombre';
import { ValidacionTel } from '../Validaciones/ValidacionTel';
import Popup from '../../utility/popup/Popup';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 30px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  width: 40%;
`;

const Footer = styled.div`
  text-align: center;
  margin-top: 20px;
  width: 100%;

  & p:first-child {
    letter-spacing: 4px !important;
  }

  & p:last-child {
    letter-spacing: 3px;
  }
`;

const FormNuevo = () => {
  const [info, setinfo] = useState({
    nombre: '',
    apellido: '',
    tel: '',
    area: '',
  });

  const { nombre, apellido, tel, area } = info;

  const form = useRef();
  const [textpopup, settextpopup] = useState();
  //////// Validacion
  const [start, setStart] = useState(true);

  const [popup, setpopup] = useState('');

  ///Validaciones States
  const [VoFNombre, setVoFNombre] = useState('');
  const [VoFApellido, setVoFApellido] = useState('');
  const [VoFTelefono, setVoFTelefono] = useState('');
  ///Validaciones States

  useEffect(() => {
    if (start === true) {
      return;
    } else {
      //////// Validacion Nombres
      setVoFNombre(ValidacionNombre(nombre));

      //////// Validacion Apellido
      setVoFApellido(ValidacionNombre(apellido));

      ////// Validacion Telefono
      setVoFTelefono(ValidacionTel(tel));
    }
  }, [nombre, apellido, tel, start]);

  const save = (inf) => {
    const { value, name } = inf;

    setinfo({ ...info, [name]: value });
    console.log(info);
  };

  const send = async (e) => {
    e.preventDefault();

    ///Validacion Nombre
    setVoFNombre(ValidacionNombre(nombre));

    ////Validacion Apellido
    setVoFApellido(ValidacionNombre(apellido));

    ///Validacion Telefono
    setVoFTelefono(ValidacionTel(tel));

    setStart(false);

    ///Validacion De todos
    if (
      nombre.trim() === '' ||
      apellido.trim() === '' ||
      tel === '' ||
      !nombre.match(/^[a-zA-Z]+$/) ||
      !apellido.match(/^[a-zA-Z]+$/)
    ) {
      return;
    }
    setStart(true);
    setpopup(true);

    emailjs
      .sendForm(
        'service_qtagz2l',
        'template_xgogu37',
        e.target,
        'user_mu1Ke4tCNrIblNSCDFKhw'
      )
      .then(
        (result) => {
          settextpopup('Fue Enviado Excitosamente');
        },
        (error) => {
          settextpopup('Algo Salio Mal intente despues o mas Tarde');
        }
      );

    setinfo({ nombre: '', apellido: '', tel: '', area: '' });
  };
  //////// Validacion

  return (
    <>
      <FormHeader color="green">soy nuevo</FormHeader>
      <Container>
        <Flex>
          <Form ref={form} onSubmit={send}>
            <Input
              placeholder="Nombre"
              type="text"
              name="nombre"
              Change={save}
              validation={VoFNombre}
              value={nombre}
            />
            <Input
              placeholder="Apellido"
              type="text"
              name="apellido"
              Change={save}
              validation={VoFApellido}
              value={apellido}
            />
            <Input
              placeholder="Teléfono de contacto"
              type="tel"
              name="tel"
              Change={save}
              validation={VoFTelefono}
              value={tel}
            />
            <Input
              tipo="textarea"
              name="area"
              placeholder="Mensaje/Pregunta:"
              Change={save}
              value={area}
            />
            <Button
              color="primary"
              center="center"
              width="full"
              type="submit"
              style={{ marginTop: '20px', background: '#12AFAF' }}
            >
              Enviar
            </Button>
          </Form>

          <Footer>
            <FormFooter tipo="Main">
              !Te damos la bienvenida a la familia Palabra Fiel!
            </FormFooter>
            <FormFooter>
              Por lo tanto, si alguno esta en Cristo, es una nueva creacion.
              <br /> ¡Lo viejo ha pasado, ha llegado ya lo nuevo! 2 <br />{' '}
              Corintios 5:17
            </FormFooter>
          </Footer>
        </Flex>
      </Container>
      <Popup
        show={popup}
        onHide={() => setpopup(false)}
        titulo="Espere un momento..."
      >
        <h3>{textpopup}</h3>
      </Popup>
    </>
  );
};

export default FormNuevo;
