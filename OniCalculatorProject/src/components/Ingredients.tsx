import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Ingredient from "../models/Ingredient"

let ingredients = require('../ingredients.json')

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

        ingredients.push(new Ingredient(null, null, ingredients.length > 0 ? ingredients[ingredients.length - 1].Id : null));

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
            if (xmlhttp.readyState != 4) return;

            if (xmlhttp.status != 200) {
                alert(xmlhttp.status + ': ' + xmlhttp.statusText);
            } else {
                alert(xmlhttp.responseText);
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
                <Button class="B1C" text="Add Ingredient" onClick={this.onIngredientButtonClick} />
                <br />
                <Button class="B1A" text="Save Ingredients" onClick={this.onSaveIngredientsClick} />
            </div>
        </div>;
    }
};