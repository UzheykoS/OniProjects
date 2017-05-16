import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"

interface IRecipeGroupProps {
    recipe: Recipe;
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

    renderIngredients(ingredients: { [key: string]: { Qty: number, Desc?: string }; }, isCollapsed) {
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
                    <span className="row-child-data">{"Qty = " + ingredients[i].Qty}</span>
                </td>
                <td>
                    <span className="row-child-data">{"Description = " + ingredients[i].Desc}</span>
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
                <td className="first-column" style={{ paddingLeft: "10px" }}>
                    <span className={"ar-crm-arrow toggle-group " + (subrecipeCollapsedState[sr.Id] ? "" : "rotate-90")} 
                    onClick={() => this.toggleSubRecipeGroup(sr.Id.toString())} />
                    <span className="row-parent-label" onClick={() => this.toggleSubRecipeGroup(sr.Id.toString())}>{sr.Name}</span>
                </td>
                <td>
                    <span className="row-parent-data">{}</span>
                </td>
                <td>
                    <span className="row-parent-data">{}</span>
                </td>
            </tr>);
            subRecipeRows.push(this.renderIngredients(sr.IngredientsToQty, subrecipeCollapsedState[sr.Id] || isRecipeCollapsed));
        });

        return subRecipeRows;
    }

    render() {
        const { recipe } = this.props;
        const { isRecipeCollapsed } = this.state;
        let recipeRows = [];

        recipeRows.push(<tr key={recipe.Name}>
            <td className="first-column">
                <span className={"ar-crm-arrow toggle-group " + (isRecipeCollapsed ? "" : "rotate-90")} onClick={this.toggleRowGroup} />
                <span className="row-parent-label" onClick={this.toggleRowGroup}>{recipe.Name}</span>
            </td>
            <td>
                <span className="row-parent-data">{}</span>
            </td>
            <td>
                <span className="row-parent-data">{}</span>
            </td>
        </tr>);

        recipeRows.push(this.renderSubrecipeGroup(recipe.SubRecipes));

        return <tbody>
            {recipeRows}
        </tbody>;
    }
}