import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"

interface ISubRecipeGroupProps {
    subrecipe: SubRecipe;
    isVisible: boolean;

    onIngredientChanged?: (sr: SubRecipe, ingredient: string) => void;
    onSubrecipeChanged?: (sr: SubRecipe) => void;
}

interface ISubRecipeGroupState {
    isCollapsed: boolean;
}


export class SubRecipeGroup extends React.Component<ISubRecipeGroupProps, ISubRecipeGroupState> {
    constructor(props: ISubRecipeGroupProps) {
        super(props);

        this.state = {
            isCollapsed: true
        }
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

    renderChildRows(ingredients: { [key: string]: { Qty: number, Desc?: string }; }) {
        if (!ingredients) {
            return;
        }

        const { isCollapsed } = this.state;

        return Object.keys(ingredients).map((i) => {
            return <tr key={i} className={isCollapsed ? "group-hidden" : "group-visible"}>
                <td className="first-column">
                    <span className="row-child-label">{i}</span>
                </td>
                <td>
                    <span className="row-child-data">{"Qty = " + ingredients[i].Qty}</span>
                </td>
                <td>
                    <span className="row-child-data">{"Description = " + ingredients[i].Desc}</span>
                </td>
            </tr>
        });
    }

    render() {
        const { subrecipe, isVisible } = this.props;
        const { isCollapsed } = this.state;
        let result = [];

        result.push(<tr key={subrecipe.Id}>
            <td className="first-column" style={{ paddingLeft: "10px" }} colSpan={3}>
                <span className={"ar-crm-arrow toggle-group " + (isCollapsed ? "" : "rotate-90")} onClick={this.toggleRowGroup} />
                <span className="row-parent-label" onClick={() => this.toggleRowGroup()}>{subrecipe.Name}</span>
            </td>
        </tr>);

        result.push(this.renderChildRows(subrecipe.IngredientsToQty));

        return <tr className={isVisible ? "" : "group-hidden"}>
            {result}
        </tr>;
    }
}