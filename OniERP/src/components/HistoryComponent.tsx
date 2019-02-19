import { Component } from 'react';
import * as React from 'react'
import { connect } from 'react-redux';
import { Check } from '../utils/types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import { DATE_FORMAT } from '../utils/dictionaries';

const mapStateToProps = (state) => {
    return {
        history: state.history
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export interface IHistoryComponentProps {
    history?: Array<Check>;
}

export interface IHistoryComponentState {
}

export class HistoryComponent extends Component<IHistoryComponentProps, IHistoryComponentState>{
    render() {
        const { history } = this.props;

        return <List component="nav">
            {history.sort((a, b) => (a.id > b.id) ? -1 : ((b.id > a.id) ? 1 : 0)).map(h => {
                return <ListItem key={h.id}>
                    <ExpansionPanel className='historyContainer'>
                        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{`Чек #${h.id} (${h.date.format(DATE_FORMAT)})`}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails style={{ flexDirection: 'column' }}>
                            <Typography variant={'subheading'}>
                                <b>Десерты</b>
                            </Typography>
                            <div className='historyItemRow'>
                                {
                                    h.desserts.map((d, index) => {
                                        return <Typography key={index} variant={'subheading'}>
                                            {`${d.type} ${d.taste}: ${d.quantity ? d.quantity : d.size}`}
                                        </Typography>;
                                    })
                                }
                            </div>
                            <Divider />
                            <Typography variant={'subheading'}>
                                <b>Напитки</b>
                            </Typography>
                            <div className='historyItemRow'>
                                {
                                    h.drinks.map((d, index) => {
                                        return <Typography key={index} variant={'subheading'}>
                                            {`${d.id}: ${d.size}`}
                                        </Typography>;
                                    })
                                }
                            </div>
                            <Divider />
                            <div className='historyItemRow'>
                                <Typography variant={'subheading'}>
                                    <b>Тип оплаты: </b>{h.payment}
                                </Typography>
                            </div>
                            <div className='historyItemRow'>
                                <Typography variant={'subheading'}>
                                    <b>Тип заказа: </b>{h.type}
                                </Typography>
                            </div>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                </ListItem>
            })}
        </List>;
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);
