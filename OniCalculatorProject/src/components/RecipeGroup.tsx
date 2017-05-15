import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import { SubRecipeGroup } from "./SubRecipeGroup";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"

interface IRecipeGroupProps {
    recipe: Recipe;
}

interface IRecipeGroupState {
    isCollapsed: boolean;
}

export class RecipeGroup extends React.Component<IRecipeGroupProps, IRecipeGroupState> {
    constructor(props: IRecipeGroupProps) {
        super(props);

        this.state = {
            isCollapsed: true
        }
    }

    componentWillReceiveProps() {
        this.setState({
            isCollapsed: true 
        });
    }

    toggleRowGroup = () => {
        this.setState({
            isCollapsed: !this.state.isCollapsed
        });
    }

    onEditableCellFocus(ev) {
        ev.target.select();
    }

    calculatePrice() {
        return null;
    }

    renderChildRows(subRecipes: Array<SubRecipe>) {
        if (!subRecipes) {
            return;
        }
        
        return subRecipes.map((sr) => {
            return <tr key={sr.Name} className={this.state.isCollapsed ? "group-visible" : "group-hidden"}>
                <td className="first-column">
                    <span className="row-child-label">{sr.Name}</span>
                </td>
                <td>
                    <span className="row-child-data">{""}</span>
                </td>
                <td>
                    <span className="row-child-data">{""}</span>
                </td>             
            </tr>
        });
    }

    render() {
        const { recipe } = this.props;
        const { isCollapsed } = this.state;
        let result = [];

        result.push(<tr key={recipe.Name}>
            <td className="first-column">
                <span className={"ar-crm-arrow toggle-group " + (isCollapsed ? "rotate-90" : "")} onClick={this.toggleRowGroup}/>
                <span className="row-parent-label" onClick={() => this.toggleRowGroup()}>{recipe.Name}</span>
            </td>
            <td>
                <span className="row-parent-data">{"*&**+++"}</span>
            </td> 
            <td>
                <span className="row-parent-data">{"TEST"}</span>
            </td> 
        </tr>);

        result.push(this.renderChildRows(recipe.SubRecipes));

        return <tbody>
            {result}
        </tbody>;
    }
}