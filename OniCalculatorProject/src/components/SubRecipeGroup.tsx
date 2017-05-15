import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Recipe from "../models/Recipe"
import SubRecipe from "../models/SubRecipe"
import Ingredient from "../models/Ingredient"

interface ISubRecipeGroupProps {
    parent: any;
    children: Array<any>;
    sortByShareClass: boolean;
    includeDebt: boolean;
    decimalPrecision: number;
}

interface ISubRecipeGroupState {
    isVisible: boolean;
}

export class SubRecipeGroup extends React.Component<ISubRecipeGroupProps, ISubRecipeGroupState> {
    constructor(props: ISubRecipeGroupProps) {
        super(props);

        this.state = {
            isVisible: true
        }
    }

    componentWillReceiveProps() {
        this.setState({
            isVisible: true 
        });
    }

    toggleRowGroup() {
        let visible = this.state.isVisible;
        this.setState({
            isVisible: !visible
        });
    }

    onEditableCellFocus(ev) {
        ev.target.select();
    }

    calculateSecurityPercentageValue() {
        return this.props.includeDebt ? this.props.parent.AmountOwnershipPercentShare : this.props.parent.QuantityOwnershipPercentShare;
    }

    calculateSecurityQuantityValue() {
        let result = 0;

        this.props.children.forEach((c) => {
            result += this.props.includeDebt ? c.Amount : c.Quantity;
        });

        return result;
    }

    calculateInvestorPercentageValue() {
        return this.props.includeDebt ? this.props.parent.AmountOwnershipPercent : this.props.parent.QuantityOwnershipPercent;
    }

    calculateInvestorQuantityValue() {
        let result = 0;

        this.props.children.forEach((c) => {
            result += this.props.includeDebt ? c.AmountShare : c.QuantityShare;
        });

        return result;
    }

    formatNumber(number) {
        var num = !!number ? number : 0;
        return (+num.toFixed(this.props.decimalPrecision)).toLocaleString('en-US', { minimumFractionDigits: this.props.decimalPrecision });
    }

    renderChildRows(children) {
        if (!children) {
            return;
        }
        
        return children.map((child) => {
            return <tr key={child.Id} className={this.state.isVisible ? "group-visible" : "control-hidden"}>
                <td className="first-column">
                    <span className="row-child-label">{child.Name}</span>
                </td>
                <td>
                    <span className="row-child-data">{this.props.sortByShareClass ?
                        (this.props.includeDebt ? this.formatNumber(child.Amount) : this.formatNumber(child.Quantity)) :
                        (this.props.includeDebt ? this.formatNumber(child.AmountShare) : this.formatNumber(child.QuantityShare))}</span>
                </td>
                <td>
                    <span className="row-child-data">{this.props.sortByShareClass ?
                        (this.props.includeDebt ? child.AmountOwnershipPercent.toFixed(2) + "%" : child.QuantityOwnershipPercent.toFixed(2) + "%") :
                        (this.props.includeDebt ? child.AmountOwnershipPercentShare.toFixed(2) + "%" : child.QuantityOwnershipPercentShare.toFixed(2) + "%")}</span>
                </td>             
            </tr>
        });
    }

    render() {
        let result = [];
        let securityPercentage = this.props.sortByShareClass ? this.calculateSecurityPercentageValue() : this.calculateInvestorPercentageValue();
        let securityQuantity = this.props.sortByShareClass ? this.calculateSecurityQuantityValue() : this.calculateInvestorQuantityValue();

        result.push(<tr key={this.props.parent.Id}>
            <td className="first-column">
                <span className={"arf-arrow toggle-group " + (this.state.isVisible ? "rotate-90" : "")} onClick={() => this.toggleRowGroup()}/>
                <span className="row-parent-label" onClick={() => this.toggleRowGroup()}>{this.props.parent.Name}</span>
                <div className="row-parent-sublabel">
                    {this.props.sortByShareClass ? this.props.children.length + " investor(s)" : this.props.children.length + " securities"}
                </div>
            </td>
            <td>
                <span className="row-parent-data">{this.formatNumber(securityQuantity)}</span>
            </td> 
            <td>
                <span className="row-parent-data">{securityPercentage.toFixed(2) + "%"}</span>
            </td> 
        </tr>);

        result.push(this.renderChildRows(this.props.children));

        return <tbody>
            {result}
        </tbody>;
    }
}