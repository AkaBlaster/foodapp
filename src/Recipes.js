import React from 'react';
import style from './Recipe.module.css';

const Recipe = ({title,calories,image,ingredients}) => {
    return(
      <div className={style.Recipe}>
          <h3>{title}</h3>
          <p className={style.textSize}>Total Calories :{calories}</p>
          <ol>
              {ingredients.map(ingredient => (
                  <li className={style.textSize}>{ingredient.text}</li>
                  ))}
          </ol>
          <img className={style.Image} src={image} alt=""/>
      </div>
    );
}

export  default Recipe;