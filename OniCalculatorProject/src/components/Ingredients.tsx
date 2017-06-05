import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Ingredient from "../models/Ingredient"
import Helper from "../middleware/helper"

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

// let ingredients = require('../ingredients.json')

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
    searchText?: string;
}

export class Ingredients extends React.Component<any, IIngredientsState>{
    constructor(props) {
        super(props);

        this.state = {
            ingredients: [],
            searchText: ""
        }
    }

    async componentDidMount() {     
        let ingredients = await Helper.getIngredients();
        this.setState({
            ingredients
        })
    }

    onIngredientButtonClick = () => {
        const { ingredients } = this.state;

        ingredients.push(new Ingredient());

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

    onSupplierChanged = (ev: any, ingredient: Ingredient) => {
        const { ingredients } = this.state;

        ingredients.find(i => i == ingredient).Supplier = ev.target.value;

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

    onIngredientSearch = (ev) => {
        this.setState({
            searchText: ev.target.value
        })
    }

    render() {
        const { ingredients, searchText } = this.state;
        const buttonsStyle = {
            margin: 12,
            width: 172
        };

        return <div className="ingredients-container">
            <div className="search-wrapper">
                <Input class="if1" placeholder="Search" value={searchText} onChange={this.onIngredientSearch} />
            </div>
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
                            <div>Supplier</div>
                        </th>
                        <th>
                            <span className="ar-crm-basket_deleting"></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {ingredients.filter(i => i.Name.toLowerCase().indexOf(searchText.toLowerCase()) > -1).map(i => {
                        return <tr key={i.Id}>
                            <td>
                                <Input class="if1" placeholder="Enter name" value={i.Name} onChange={(ev) => this.onNameChanged(ev, i)} />
                            </td>
                            <td>
                                <Input class="if1" placeholder="Enter price" value={i.Price ? i.Price.toString() : ""} onChange={(ev) => this.onPriceChanged(ev, i)} />
                            </td>
                            <td>
                                <Input class="if1" placeholder="Enter supplier" value={i.Supplier ? i.Supplier.toString() : ""} onChange={(ev) => this.onSupplierChanged(ev, i)} />
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
        </div>;
    }
};