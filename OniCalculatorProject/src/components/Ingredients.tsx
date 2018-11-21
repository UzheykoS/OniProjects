import * as React from 'react'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import Ingredient from "../models/Ingredient"
import Helper from "../middleware/helper"
import { Status }  from '../models/Status'

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import FontIcon from 'material-ui/FontIcon';

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
    pending?: boolean;
}

export class Ingredients extends React.Component<any, IIngredientsState>{
    constructor(props) {
        super(props);

        this.state = {
            ingredients: [],
            searchText: "",
            pending: false
        }
    }

    async componentDidMount() {     
        let ingredients = await Helper.getIngredients();
        this.setState({
            ingredients
        })
    }

    componentWillReceiverProps(nextProps) {
        this.setState({
            searchText: ""
        })
    }

    onIngredientButtonClick = () => {
        const { ingredients } = this.state;

        const ingredient = new Ingredient();
        ingredient.status = Status.Added;
        ingredients.push(ingredient);

        this.setState({
            ingredients
        })
    }

    onSaveIngredientsClick = async () => {
        const { ingredients } = this.state;

        this.setState({
            pending: true
        })

        for (let i of ingredients.filter(ing => ing.status === Status.Removed)) {
            await Helper.deleteIngredient(i.id);
        }

        for (let i of ingredients.filter(ing => ing.status === Status.Changed)) {
            if (i.id) {
                await Helper.putIngredient(i.id, i);
            }
        }

        const newIngredients = ingredients.filter(i => i.status === Status.Added);
        if (newIngredients.length) {
            await Helper.saveIngredients(newIngredients);    
        }          

        this.setState({
            pending: false
        })
    }

    onNameChanged = (ev: any, ingredient: Ingredient) => {
        const { ingredients } = this.state;

        ingredients.find(i => i === ingredient).name = ev.target.value;
        if (ingredient.status !== Status.Added) {
            ingredients.find(i => i === ingredient).status = Status.Changed;
        }        

        this.setState({
            ingredients
        });
    }

    onPriceChanged = (ev: any, ingredient: Ingredient) => {
        const { ingredients } = this.state;

        ingredients.find(i => i === ingredient).price = ev.target.value;
        if (ingredient.status !== Status.Added) {
            ingredients.find(i => i === ingredient).status = Status.Changed;
        }

        this.setState({
            ingredients
        });
    }

    onSupplierChanged = (ev: any, ingredient: Ingredient) => {
        const { ingredients } = this.state;

        ingredients.find(i => i === ingredient).supplier = ev.target.value;
        if (ingredient.status !== Status.Added) {
            ingredients.find(i => i === ingredient).status = Status.Changed;
        }

        this.setState({
            ingredients
        });
    }

    onRemoveClick = (ingredient: Ingredient) => {
        const { ingredients } = this.state;

        if (ingredient.id) {
            ingredients.find(i => i === ingredient).status = Status.Removed;
        }
        else {
            const index = ingredients.indexOf(ingredient);
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
        const { ingredients, searchText, pending } = this.state;
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
                    {ingredients.
                    filter(i => i.status != Status.Removed).
                    filter(i => i.name.toLowerCase().indexOf(searchText.toLowerCase()) > -1).
                    map((i, index) => {
                        return <tr key={index}>
                            <td>
                                <Input class="if1" placeholder="Enter name" value={i.name} onChange={(ev) => this.onNameChanged(ev, i)} />
                            </td>
                            <td>
                                <Input class="if1" placeholder="Enter price" value={i.price ? i.price.toString() : ""} onChange={(ev) => this.onPriceChanged(ev, i)} />
                            </td>
                            <td>
                                <Input class="if1" placeholder="Enter supplier" value={i.supplier ? i.supplier.toString() : ""} onChange={(ev) => this.onSupplierChanged(ev, i)} />
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
            <Busy isVisible={pending} />
        </div>;
    }
};