import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import { RecipeGroup } from "./RecipeGroup";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"
import Category from "../models/Category"
import { Tabs, Tab } from 'material-ui/Tabs';
import Helper from "../middleware/helper"
import { Status }  from '../models/Status'

interface IRecipesState {
    recipes?: Array<Recipe>;
    ingredients?: Array<Ingredient>;
    categories?: Array<Category>;
    pending?: boolean;
}

export class Recipes extends React.Component<any, IRecipesState>{
    constructor(props) {
        super(props);

        this.state = {
            recipes: [],
            categories: [],
            pending: false
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

    onRecipeButtonClick = () => {
        const { recipes, ingredients } = this.state;

        let recipe = new Recipe();
        recipes.push(recipe);

        this.setState({
            recipes
        })
    }

    onSaveRecipesButtonClick = async () => {
        const { recipes, ingredients } = this.state;

        recipes.forEach(r => {
            r.subrecipes.forEach(sr => {
                sr.ingredientItems.forEach(ii => {

                })
            })
        })

        this.setState({
            pending: true
        })

        for (let recipe of recipes.filter(r => r.status == Status.Removed)) {
            await Helper.deleteRecipe(recipe.id);
        }

        for (let recipe of recipes.filter(r => r.status == Status.Changed)) {
            if (recipe.id) {
                await Helper.putRecipe(recipe.id, recipe);
            }
        }

        const newRecipes = recipes.filter(r => r.status == Status.Added);
        if (newRecipes.length) {
            await Helper.saveRecipes(newRecipes);    
        }          

        this.setState({
            pending: false
        })
    }

    onRecipeChanged = (recipe: Recipe) => {
        const { recipes, ingredients } = this.state;

        recipes.forEach(r => {
            if (r.id === recipe.id) {
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
        const { recipes, ingredients, categories, pending } = this.state;

        return <div className="recipes-container" style={{ margin: "20px" }}>
            <Tabs>
                {categories.map(c => {
                    return <Tab label={c.name} key={c.id}>
                        <div>
                        </div>
                    </Tab>;
                })}
            </Tabs>
            <div>
                <Button class="B1B" text="Add Recipe" onClick={this.onRecipeButtonClick} />
                <br />
                <Button class="B1A" text="Save Recipes" onClick={this.onSaveRecipesButtonClick} />
            </div>
            {recipes.map((r, i) => {
                return <RecipeGroup recipe={r} key={i} ingredients={ingredients} onRecipeChanged={this.onRecipeChanged} onRecipeRemoved={this.onRecipeRemoved} />;
            })}
            <Busy isVisible={pending} />
        </div>;
    }
};