import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import { RecipeGroup } from "./RecipeGroup";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"
import Category from "../models/Category"
import { Tabs, Tab } from 'material-ui/Tabs';
import Helper from "../middleware/helper"

// let recipes = require('../recipes.json')
// let ingredients = require('../ingredients.json')

interface IRecipesState {
    recipes?: Array<Recipe>;
    ingredients?: Array<Ingredient>;
    categories?: Array<Category>;
}

export class Recipes extends React.Component<any, IRecipesState>{
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            categories: []
        }
    }

    async componentDidMount() {
        let categories = await Helper.getCategories();
        let recipes = await Helper.getRecipes();
        let ingredients = await Helper.getIngredients();
        this.setState({
            categories,
            recipes,
            ingredients
        })
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

        let recipe = new Recipe();
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
        const { recipes, ingredients, categories } = this.state;

        return <div className="recipes-container" style={{ margin: "20px" }}>
            <Tabs>
                {categories.map(c => {
                    return <Tab label={c.Name} key={c.Id}>
                        <div>
                        </div>
                    </Tab>;
                })}
            </Tabs>
            <div>
                <Button class="B1B" text="Add Recipe" onClick={this.onRecipeButtonClick} />
                <br />
                <Button class="B1A" text="Save Recipes" onClick={() => { }} />
            </div>
            {recipes.map((r, i) => {
                return <RecipeGroup recipe={r} key={i} ingredients={ingredients} onRecipeChanged={this.onRecipeChanged} onRecipeRemoved={this.onRecipeRemoved} />;
            })}
        </div>;
    }
};