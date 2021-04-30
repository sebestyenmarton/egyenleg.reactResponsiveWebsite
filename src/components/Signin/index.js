import React from 'react';
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text
} from './SignInElements';

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Egyenleg</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>
                Jelentkezz be az adatlapodra
              </FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput stype='email' required />
              <FormLabel htmlFor='for'>Jelszó</FormLabel>
              <FormInput stype='password' required />
              <FormButton type='submit'>Belépés</FormButton>
              <Text>Elfelejtettem a jelszavamat</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
      
    </>
  )
}

export default SignIn;
