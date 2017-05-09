import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Select, Button, Checkbox, Input, Busy, NotificationContainer, NotificationType } from "altareturn-ui-controls";
import { Ingredients } from "./Ingredients";
import { Recipes } from "./Recipes";

import Moment = require("moment")

const enum Tabs {
    Ingredients = 0,
    Recipes
}

interface IAppState {
    activeTab?: Tabs;
}

export class App extends React.Component<any, IAppState>{
    constructor(props) {
        super(props);

        this.state = {
            activeTab: Tabs.Ingredients
        }
    }

    componentDidMount() {
    }

    onTabSelected(ev: any, tab: Tabs) {
        this.setState({
            activeTab: tab
        });
    }

    renderTabs() {
        const { language } = this.props;

        return <ul className="tab noselect">
            <li><a href="javascript:void(0)" className={"tablinks " + (this.state.activeTab == Tabs.Recipes ? "active" : "")} onClick={ev => this.onTabSelected(ev, Tabs.Recipes)}>{"RECIPES"}</a></li>
            <li><a href="javascript:void(0)" className={"tablinks " + (this.state.activeTab == Tabs.Ingredients ? "active" : "")} onClick={ev => this.onTabSelected(ev, Tabs.Ingredients)}>{"INGREDIENTS"}</a></li>
        </ul>;
    }

    renderContent() {
        const { activeTab } = this.state;
        switch (activeTab) {
            case Tabs.Ingredients:
                return <Ingredients {...this.props} />;
            case Tabs.Recipes:
                return <Recipes {...this.props} />;
            default:
                return null;
        }
    }

    render() {
        return <div>
            {this.renderTabs()}
            {this.renderContent()}
        </div>;
    }
};