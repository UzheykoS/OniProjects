import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"
import IngredientItem from "../models/IngredientItem"

interface IRecipeGroupProps {
    recipe: Recipe;
    ingredients: Array<Ingredient>;

    onRecipeChanged?: (sr: Recipe) => void;
    onRecipeRemoved?: (sr: Recipe) => void;
}

interface IRecipeGroupState {
    isRecipeCollapsed: boolean;
    subrecipeCollapsedState?: { [key: string]: boolean }
}

export class RecipeGroup extends React.Component<IRecipeGroupProps, IRecipeGroupState> {
    constructor(props: IRecipeGroupProps) {
        super(props);

        let subrecipeCollapsedState = {};
        props.recipe.subrecipes.forEach(sr => {
            subrecipeCollapsedState[sr.id] = true;
        });
        this.state = {
            isRecipeCollapsed: true,
            subrecipeCollapsedState
        };
    }

    toggleRowGroup = () => {
        this.setState({
            isRecipeCollapsed: !this.state.isRecipeCollapsed
        });
    }

    toggleSubRecipeGroup = (recipeId: string) => {
        const { subrecipeCollapsedState } = this.state;
        subrecipeCollapsedState[recipeId] = !subrecipeCollapsedState[recipeId];
        this.setState({
            subrecipeCollapsedState
        });
    }

    calculatePrice() {
        return null;
    }

    onRecipeRemoveClick = () => {
        const { onRecipeRemoved, recipe } = this.props;
        onRecipeRemoved(recipe);
    }

    onSubrecipeRemoveClick = (subrecipeId: number) => {
        const { onRecipeChanged, recipe } = this.props;

        const index = recipe.subrecipes.findIndex(sr => sr.id == subrecipeId);
        if (index > -1) {
            recipe.subrecipes.splice(index, 1);
        }

        onRecipeChanged(recipe);
    }

    onIngredientRemoveClick = (subrecipe: SubRecipe, ingredientItem: IngredientItem) => {
        const { onRecipeChanged, recipe } = this.props;

        const index = recipe.subrecipes.find(sr => sr.id == subrecipe.id).ingredientItems.indexOf(ingredientItem);
        if (index > -1) {
            recipe.subrecipes.find(sr => sr.id == subrecipe.id).ingredientItems.splice(index, 1);
        }

        onRecipeChanged(recipe);
    }

    onIngredientQtyChanged = (subrecipe: SubRecipe, ingredientItem: IngredientItem, ev: any) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.subrecipes.find(sr => sr.id == subrecipe.id).ingredientItems.find(ii => ii.id == ingredientItem.id).quantity = parseInt(ev.target.value);

        onRecipeChanged(recipe);
    }

    onIngredientDescChanged = (subrecipe: SubRecipe, ingredientItem: IngredientItem, ev: any) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.subrecipes.find(sr => sr.id == subrecipe.id).ingredientItems.find(ii => ii.id == ingredientItem.id).description = ev.target.value;

        onRecipeChanged(recipe);
    }

    onSubrecipeNameChanged = (ev: any, srId: number) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.subrecipes.forEach(subrecipe => {
            if (srId == subrecipe.id) {
                subrecipe.name = ev.target.value;
                return;
            }
        });

        onRecipeChanged(recipe);
    }

    onRecipeNameChanged = (ev: any) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.name = ev.target.value;

        onRecipeChanged(recipe);
    }

    onIngredientChange = (sr: SubRecipe, item: Ingredient, prevIngredientItem: IngredientItem) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.subrecipes.
            find(subrecipe => subrecipe.id == sr.id).ingredientItems.
            find(ii => ii.id == prevIngredientItem.id).ingredient_id = item.id;

        onRecipeChanged(recipe);
    }

    renderIngredients(subrecipe: SubRecipe, isCollapsed: boolean) {
        const ingredientItems = subrecipe.ingredientItems;
        if (!ingredientItems.length) {
            return;
        }

        const { ingredients } = this.props;

        let ingredientsRows = [];
        ingredientItems.map((i, index) => {
            ingredientsRows.push(<tr key={index} className={isCollapsed ? "group-hidden" : "group-visible"}>
                <td className="first-column">
                    <div className="select-holder">
                        <Select
                            showClear={false}
                            defaultValue={(options: Array<Ingredient>) => options.filter(o => o.id == i.ingredient_id)}
                            isMultiple={false}
                            options={ingredients}
                            optionTitle={o => o.map((el) => el.name).join("")}
                            onChange={(item) => this.onIngredientChange(subrecipe, item, i)}
                            class="dd1" />
                    </div>
                </td>
                <td className="input-holder">
                    <Input class="if1" value={i.quantity.toString()} onChange={(ev) => this.onIngredientQtyChanged(subrecipe, i, ev)} />
                </td>
                <td className="input-holder">
                    <Input class="if1" value={i.description} onChange={(ev) => this.onIngredientDescChanged(subrecipe, i, ev)} />
                </td>
                <td>
                    <span className="ar-crm-close column-remove" onClick={() => this.onIngredientRemoveClick(subrecipe, i)}></span>
                </td>
            </tr>);
        });

        return ingredientsRows;
    }

    renderSubrecipeGroup(subRecipes: Array<SubRecipe>) {
        if (!subRecipes) {
            return;
        }

        const { isRecipeCollapsed, subrecipeCollapsedState } = this.state;
        let subRecipeRows = [];

        subRecipes.forEach((sr, index) => {
            subRecipeRows.push(<tr key={index} className={isRecipeCollapsed ? "group-hidden" : "group-visible"}>
                <td className="first-column" style={{ paddingLeft: "20px" }} colSpan={3} onClick={() => this.toggleSubRecipeGroup(sr.id.toString())}>
                    <span className={"ar-crm-arrow toggle-group " + (subrecipeCollapsedState[sr.id] ? "" : "rotate-90")} />
                    <div className="subrecipe-name input-holder" onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); }}>
                        <Input class="if1" placeholder="Enter name" value={sr.name} onChange={(ev) => this.onSubrecipeNameChanged(ev, sr.id)} />
                    </div>
                </td>
                <td>
                    <span className="ar-crm-close column-remove" onClick={() => this.onSubrecipeRemoveClick(sr.id)}></span>
                </td>
            </tr>);
            subRecipeRows.push(this.renderIngredients(sr, subrecipeCollapsedState[sr.id] || isRecipeCollapsed));
        });

        return subRecipeRows;
    }

    render() {
        const { recipe } = this.props;
        const { isRecipeCollapsed } = this.state;
        let recipeRows = [];

        recipeRows.push(<tr key={recipeRows.length}>
            <td className="first-column" colSpan={3} onClick={this.toggleRowGroup}>
                <span className={"ar-crm-arrow toggle-group " + (isRecipeCollapsed ? "" : "rotate-90")} />
                <div className="subrecipe-name input-holder" onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); }}>
                    <Input class="if1" placeholder="Enter name" value={recipe.name} onChange={(ev) => this.onRecipeNameChanged(ev)} />
                </div>
            </td>
            <td>
                <span className="ar-crm-close column-remove" onClick={() => this.onRecipeRemoveClick()}></span>
            </td>
        </tr>);

        recipeRows.push(this.renderSubrecipeGroup(recipe.subrecipes));

        return <table className="recipes-table">
            <thead>
                <tr>
                    <th>
                        <div>Recipe Name</div>
                    </th>
                    <th>
                        <div>Quantity</div>
                    </th>
                    <th>
                        <div>Description</div>
                    </th>
                    <th>
                        <span className="ar-crm-basket_deleting"></span>
                    </th>
                </tr>
            </thead>
            <tbody>
                {recipeRows}
            </tbody>
        </table>;
    }
}