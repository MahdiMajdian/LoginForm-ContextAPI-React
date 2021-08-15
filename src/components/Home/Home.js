import React, { useContext } from 'react';
import AuthContenx from '../../store/auth-context';
import Button from '../UI/Button/Button';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = () => {
  const context = useContext(AuthContenx)
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={context.onLogout}>Log out</Button>
    </Card>
  );
};

export default Home;
