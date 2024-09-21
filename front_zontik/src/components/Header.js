import { Link, NavLink } from 'react-router-dom'
import React, { Component} from 'react';
import axios from 'axios'; 
import { useEffect, state } from "react";

const linksClasses = 'header-li-item link-gray'

const profileIcon = require('../static/images/profile_pic.png')
const notificationsIcon = require('../static/images/icons/notification-icon.png')
const settingsIcon = require('../static/images/icons/settings-icon.png')



class Header extends React.Component {
    state = { sys_balance: [], }

    componentDidMount(){
        let data
  
        axios.get('http://127.0.0.1:8000/finances/sys_balance/1') 
        .then(res => { 
            data = res.data; 
            this.setState({ 
                sys_balance : data     
            }); 
        }) 
        .catch(err => {}) 
    }
    render() {
        return (
            <header>
                <div className='header-container'>
                    <div className='header-left-block'>
                        <Link to="/" id='header-logo'>ZONTIK</Link>
                    </div>
                    <div className='header-mid-block'>
                        <NavLink to="/finances" className={linksClasses}>Финансы</NavLink>
                        <NavLink to="/organizer" className={linksClasses}>Органайзер</NavLink>
                        <NavLink to="/tools" className={linksClasses}>Инструменты</NavLink>
                        <NavLink to="/analytics" className={linksClasses}>Аналитика</NavLink>
                    </div>
                    <div className='header-right-block'>
                        {this.state.sys_balance.map((balance, id) => (
                            <div className='header-sett-item' id='balance' key={id}>
                                <p id="balance_currency">{balance.currency}</p>
                                <p id="balance_value">{balance.balance}</p>
                                <div id='add_balance'><span>+</span></div>
                            </div>
                        ))}
                        <div className='header-sett-item'>
                            <img id='notifications-pic' src={ notificationsIcon }/>
                        </div>
                        <div className='header-sett-item'>
                            <img id='settings-pic' src={ settingsIcon }/>
                        </div>
                        <div className='header-sett-item'>
                            <img id='profile-pic' src={ profileIcon }/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export {Header}