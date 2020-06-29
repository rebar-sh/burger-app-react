import React,{Component} from 'react';
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuilControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENTS_PRICE = {
    salad: 0.5,
    meat:2,
    bacon:1.5,
    cheese:1
}
class BurgerBuilder extends Component{


   state={
       ingredients:{
           salad:0,
           cheese:0,
           meat:0,
           bacon:0
       },
       totalPrice: 5
   }
//    Add Ingredients
   addIngredientHandler = (type) =>{
     const oldCount = this.state.ingredients[type] ;
     const updatedCount = oldCount + 1;
     const updateIngredients = {
         ...this.state.ingredients
     }
     updateIngredients[type] = updatedCount;

    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ingredients: updateIngredients, totalPrice: newPrice})
   
   }



//    Remove Ingredients
removeIngredientHandler = (type) =>{
    const oldCount = this.state.ingredients[type] ;

    if(oldCount <= 0){
        return;
    }
     const updatedCount = oldCount - 1;
     const updateIngredients = {
         ...this.state.ingredients
     }
     updateIngredients[type] = updatedCount;

    const priceDeduction = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ingredients: updateIngredients, totalPrice: newPrice})
}



    render(){


      const disabledinfo ={
          ...this.state.ingredients
      }
     for(let key in disabledinfo){

    disabledinfo[key] = disabledinfo[key] <= 0;
}

        return(
  <Aux>
      <Burger  ingredients={this.state.ingredients}/>
      
      <BuilControls 
      ingredientAdded = {this.addIngredientHandler}  
      ingredientRemoved = {this.removeIngredientHandler} 
      disabled={disabledinfo}
      price={this.state.totalPrice}/>
  </Aux>
        );

    }
}



export default BurgerBuilder;