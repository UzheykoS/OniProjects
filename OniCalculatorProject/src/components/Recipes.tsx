import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import { RecipeGroup } from "./RecipeGroup";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"

let recipes = require('../recipes.json')
let ingredients = require('../ingredients.json')

interface IRecipesState {
    recipes?: Array<Recipe>;
    ingredients?: Array<Ingredient>;
}

export class Recipes extends React.Component<any, IRecipesState>{
    constructor(props) {
        super(props);

        this.state = {
            recipes: recipes || [],
            ingredients: ingredients || []
        }
    }

    onSaveRecipesClick = () => {
        const { recipes } = this.state;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "/save/recipes");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(recipes));

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState != 4) {
                return;
            }

            debugger;

            if (xmlhttp.status != 200) {
                alert(xmlhttp.status + ': ' + xmlhttp.statusText);
            } else {
                alert(xmlhttp.responseText);
            }
        }
    }

    onChange = (item) => {
        if (item) {
            console.log(item);
        } else {
            console.log("no value");
        }
    }

    onRecipeButtonClick = () => {
        const { recipes, ingredients } = this.state;

        let recipe = new Recipe("", recipes.length > 0 ? recipes[recipes.length - 1].Id : null);
        // if (!!ingredients && ingredients.length > 1) {
        //     let subRecipe = new SubRecipe("TestSubRecipe");

        //     subRecipe.IngredientsToQty[ingredients[0].Name] = { Qty: 100, Desc: "test desc" };
        //     subRecipe.IngredientsToQty[ingredients[1].Name + "1"] = { Qty: 250, Desc: "test desc 2" };

        //     recipe.SubRecipes.push(subRecipe);
        // }

        recipes.push(recipe);

        this.setState({
            recipes
        })
    }

    onRecipeChanged = (recipe: Recipe) => {
        const { recipes, ingredients } = this.state;

        recipes.forEach(r => {
            if (r.Id === recipe.Id) {
                r = recipe;
                return;
            }
        })

        this.setState({
            recipes
        })
    }

    onRecipeRemoved = (recipe: Recipe) => {
        const { recipes, ingredients } = this.state;

        const index = recipes.indexOf(recipe);
        if (index > -1) {
            recipes.splice(index, 1);
        }
        
        this.setState({
            recipes
        })
    }

    render() {
        const { recipes, ingredients } = this.state;

        return <div className="recipes-container" style={{ margin: "20px" }}>
            Ingredients:
            <div>
                <Select
                    showClear={true}
                    isMultiple={false}
                    options={ingredients}
                    optionTitle={o => o.map((el) => el.Name).join("")}
                    onChange={this.onChange}
                    class="dd1" />
                <br />
                <Button class="B1B" text="Add Recipe" onClick={this.onRecipeButtonClick} />
                <br />
                <Button class="B1A" text="Save Recipes" onClick={this.onSaveRecipesClick} />
            </div>
            {recipes.map((r, i) => {
                return <RecipeGroup recipe={r} key={i} ingredients={ingredients} onRecipeChanged={this.onRecipeChanged} onRecipeRemoved={this.onRecipeRemoved}/>;
            })}
        </div>;
    }
};