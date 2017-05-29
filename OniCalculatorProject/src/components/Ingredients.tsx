import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Ingredient from "../models/Ingredient"

import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

let ingredients = require('../ingredients.json')

const styles = {
    propContainer: {
        width: 200,
        overflow: 'hidden',
        margin: '20px auto 0',
    },
    propToggleHeader: {
        margin: '20px auto 10px',
    },
};

interface IIngredientsState {
    ingredients?: Array<Ingredient>;
}

export class Ingredients extends React.Component<any, IIngredientsState>{
    constructor(props) {
        super(props);

        this.state = {
            ingredients: ingredients || []
        }
    }

    onIngredientButtonClick = () => {
        const { ingredients } = this.state;

        ingredients.push(new Ingredient("", 0, ingredients.length > 0 ? ingredients[ingredients.length - 1].Id : null));

        this.setState({
            ingredients
        })
    }

    onSaveIngredientsClick = () => {
        const { ingredients } = this.state;

        let xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "/save/ingredients");
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(JSON.stringify(ingredients));

        xmlhttp.onreadystatechange = () => {
            if (xmlhttp.readyState != 4) {
                return;
            }

            if (xmlhttp.status != 200) {
                console.log(xmlhttp.status + ': ' + xmlhttp.statusText);
            } else {
                console.log(xmlhttp.responseText);
            }
        }
    }

    onNameChanged = (ev: any, ingredient: Ingredient) => {
        const { ingredients } = this.state;

        ingredients.find(i => i == ingredient).Name = ev.target.value;

        this.setState({
            ingredients
        });
    }

    onPriceChanged = (ev: any, ingredient: Ingredient) => {
        const { ingredients } = this.state;

        ingredients.find(i => i == ingredient).Price = ev.target.value;

        this.setState({
            ingredients
        });
    }

    onRemoveClick = (ingredient: Ingredient) => {
        const { ingredients } = this.state;

        const index = ingredients.indexOf(ingredient);
        if (index > -1) {
            ingredients.splice(index, 1);
        }

        this.setState({
            ingredients
        });
    }

    render() {
        const { ingredients } = this.state;
        const buttonsStyle = {
            margin: 12,
        };

        return <div className="ingredients-container">
            <table className="ingredients-table">
                <thead>
                    <tr>
                        <th>
                            <div>Name</div>
                        </th>
                        <th>
                            <div>Price per kg</div>
                        </th>
                        <th>
                            <span className="ar-crm-basket_deleting"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.map(i => {
                        return <tr key={i.Id}>
                            <td>
                                <Input class="if1" placeholder="Enter name" value={i.Name} onChange={(ev) => this.onNameChanged(ev, i)} />
                            </td>
                            <td>
                                <Input class="if1" placeholder="Enter price" value={i.Price ? i.Price.toString() : ""} onChange={(ev) => this.onPriceChanged(ev, i)} />
                            </td>
                            <td>
                                <span className="ar-crm-close column-remove" onClick={() => this.onRemoveClick(i)}></span>
                            </td>
                        </tr>;
                    })}
                </tbody>
            </table>
            <div className="buttons-container">
                <br />
                <RaisedButton label="Add Ingredient" secondary={true} style={buttonsStyle} onClick={this.onIngredientButtonClick} />
                <br />
                <RaisedButton label="Save Ingredients" primary={true} style={buttonsStyle} onClick={this.onSaveIngredientsClick} />
            </div>
            <div>
                <Table
                    height='300px'
                    fixedHeader={true}
                    fixedFooter={true}
                    selectable={false}
                    multiSelectable={false}>
                    <TableHeader
                        displaySelectAll={false}
                        adjustForCheckbox={false}
                        enableSelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn colSpan={3} tooltip="Super Header" style={{ textAlign: 'center' }}>
                                Ingredients Table
                            </TableHeaderColumn>
                        </TableRow>
                        <TableRow>
                            <TableHeaderColumn tooltip="The ID">ID</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Name">Name</TableHeaderColumn>
                            <TableHeaderColumn tooltip="The Price">Price</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody
                        displayRowCheckbox={false}
                        deselectOnClickaway={false}
                        showRowHover={true}
                        stripedRows={true}>
                        {ingredients.map((row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.Id}</TableRowColumn>                                
                                <TableRowColumn>
                                    <TextField hintText="Hint Text" value={row.Name} onChange={(ev) => this.onNameChanged(ev, row)}/>
                                </TableRowColumn>
                                <TableRowColumn>
                                    <TextField hintText="Hint Text" value={row.Price} onChange={(ev) => this.onPriceChanged(ev, row)} />
                                </TableRowColumn>
                                <TableRowColumn style={{ width: "30px", cursor: "pointer" }}>
                                    <FontIcon className="ar-crm-close" onClick={() => this.onRemoveClick(row)}/>
                                </TableRowColumn>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter adjustForCheckbox={true}>
                        <TableRow>
                            <TableRowColumn>ID</TableRowColumn>
                            <TableRowColumn>Name</TableRowColumn>
                            <TableRowColumn>Price</TableRowColumn>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        </div>;
    }
};