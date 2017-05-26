import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"

interface IRecipeGroupProps {
    recipe: Recipe;

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
        props.recipe.SubRecipes.forEach(sr => {
            subrecipeCollapsedState[sr.Id] = true;
        });
        this.state = {
            isRecipeCollapsed: true,
            subrecipeCollapsedState
        };
    }

    // componentWillReceiveProps(nextProps) {
    //     debugger;
    //     let subrecipeCollapsedState = {};
    //     nextProps.recipe.SubRecipes.forEach(sr => {
    //         subrecipeCollapsedState[sr.Id] = true;
    //     });
    //     this.setState({
    //         isRecipeCollapsed: true,
    //         subrecipeCollapsedState
    //     });
    // }

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

    onEditableCellFocus(ev) {
        ev.target.select();
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

        const index = recipe.SubRecipes.findIndex(sr => sr.Id == subrecipeId);
        if (index > -1) {
            recipe.SubRecipes.splice(index, 1);
        }

        onRecipeChanged(recipe);
    }

    onIngredientRemoveClick = (subrecipe: SubRecipe, ingredientKey: string) => {
        const { onRecipeChanged, recipe } = this.props;

        delete recipe.SubRecipes.find(sr => sr.Id == subrecipe.Id).IngredientsToQty[ingredientKey];

        onRecipeChanged(recipe);
    }

    onIngredientChanged = (sr: SubRecipe, ingredient: string) => {
        const { recipe, onRecipeChanged } = this.props;



        onRecipeChanged(recipe);
    }

    onSubrecipeChanged = (ev: any, srId: number) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.SubRecipes.forEach(subrecipe => {
            if (srId == subrecipe.Id) {
                subrecipe.Name = ev.target.value;
                return;
            }
        });

        onRecipeChanged(recipe);
    }

    onRecipeNameChanged = (ev: any) => {
        const { recipe, onRecipeChanged } = this.props;

        recipe.Name = ev.target.value;

        onRecipeChanged(recipe);
    }

    renderIngredients(subrecipe: SubRecipe, isCollapsed: boolean) {
        const ingredients = subrecipe.IngredientsToQty;
        if (!ingredients) {
            return;
        }

        let ingredientsRows = [];
        Object.keys(ingredients).map((i) => {
            ingredientsRows.push(<tr key={i} className={isCollapsed ? "group-hidden" : "group-visible"}>
                <td className="first-column">
                    <span className="row-child-label">{i}</span>
                </td>
                <td>
                    <span className="row-child-data">{ingredients[i].Qty}</span>
                </td>
                <td>
                    <span className="row-child-data">{ingredients[i].Desc}</span>
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
            subRecipeRows.push(<tr key={sr.Id} className={isRecipeCollapsed ? "group-hidden" : "group-visible"}>
                <td className="first-column" style={{ paddingLeft: "20px" }} colSpan={3} onClick={() => this.toggleSubRecipeGroup(sr.Id.toString())}>
                    <span className={"ar-crm-arrow toggle-group " + (subrecipeCollapsedState[sr.Id] ? "" : "rotate-90")} />
                    <div className="subrecipe-name" onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); }}>
                        <Input class="if1" placeholder="Enter name" value={sr.Name} onChange={(ev) => this.onSubrecipeChanged(ev, sr.Id)} />
                    </div>
                </td>
                <td>
                    <span className="ar-crm-close column-remove" onClick={() => this.onSubrecipeRemoveClick(sr.Id)}></span>
                </td>
            </tr>);
            subRecipeRows.push(this.renderIngredients(sr, subrecipeCollapsedState[sr.Id] || isRecipeCollapsed));
        });

        return subRecipeRows;
    }

    render() {
        const { recipe } = this.props;
        const { isRecipeCollapsed } = this.state;
        let recipeRows = [];

        recipeRows.push(<tr key={recipe.Name}>
            <td className="first-column" colSpan={3} onClick={this.toggleRowGroup}>
                <span className={"ar-crm-arrow toggle-group " + (isRecipeCollapsed ? "" : "rotate-90")}/>
                <div className="subrecipe-name" onClick={(ev) => { ev.preventDefault(); ev.stopPropagation(); }}>
                    <Input class="if1" placeholder="Enter name" value={recipe.Name} onChange={(ev) => this.onRecipeNameChanged(ev)} />
                </div>
            </td>
            <td>
                    <span className="ar-crm-close column-remove" onClick={() => this.onRecipeRemoveClick()}></span>
                </td>
        </tr>);

        recipeRows.push(this.renderSubrecipeGroup(recipe.SubRecipes));

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