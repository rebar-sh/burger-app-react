import React, { Component } from 'react';
import styles from './App.module.css';
import Burger from './components/Burger/Burger';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import BurgerIngredient from './components/Burger/BurgerIngredient/BurgerIngredient';

class  App extends Component {

  render(){

  return (
    <div className={styles.App}>
    <Layout>
      <BurgerBuilder/>
    </Layout>
   
    </div>
  );

}

}

export default App;
