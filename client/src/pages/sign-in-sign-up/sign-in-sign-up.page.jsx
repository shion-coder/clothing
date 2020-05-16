import React from 'react';

import SignIn from 'components/sign-in/sign-in.component';
import SignUp from 'components/sign-up/sign-up.component';

import { Container } from './sign-in-sign-up.styles';

/* -------------------------------------------------------------------------- */

const SignInAndSignUp = () => (
  <Container>
    <SignIn />
    <SignUp />
  </Container>
);

/* -------------------------------------------------------------------------- */

export default SignInAndSignUp;
