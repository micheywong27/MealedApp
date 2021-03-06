import React from 'react';
import { Link } from 'react-router-dom';

class MyFavorites extends React.Component{
    render(){      
        let { recipe }= this.props;
        return(
            <div className="mypost" onClick={() => this.props.showRecipe(recipe)} >
                 <Link to={{pathname:`/recipes/favorite/${recipe.spoonKey}`,
                        recipe: recipe
                        }}
                        className='link'>  
                <h2 className="recipe-card-text">♦ {recipe.name} </h2>
                <img className="recipe-img-card" src={recipe.url} alt="recipe-img-card"/>
                </Link>
            </div>
            )
        }
}
export default MyFavorites;