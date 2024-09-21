import React from 'react';
import axios from 'axios'; 
import { Link, Routes, Route } from 'react-router-dom'

import '../../static/styles/wallet.css'
import TransSendIcon from '../../static/images/icons/send_money_icon.png'
// Account Widgets Polygons
import WidgetPolygonOrangeIcon from '../../static/images/icons/account_widget_orange.png'
import WidgetPolygonRedIcon from '../../static/images/icons/account_widget_red.png'
import WidgetPolygonGreenIcon from '../../static/images/icons/account_widget_green.png'
import WidgetPolygonPurpleIcon from '../../static/images/icons/account_widget_blue.png'

import { ChangeAccBalance } from '../../components/ChangeAccBalance'

function put_account_color(color) {
    switch (color) {
        case "PRP":
            return([{color: '#3A35FB'}, WidgetPolygonPurpleIcon])
        case "RED":
            return([{color: '#EF3054'}, WidgetPolygonRedIcon])
        case "GRN":
            return([{color: '#61A940'}, WidgetPolygonGreenIcon])
        case "ORN":
            return([{color: '#FF9800'}, WidgetPolygonOrangeIcon])
        default:
            return([{color: '#3A35FB'}, WidgetPolygonPurpleIcon])
    }
}
function get_total_balance(accounts) {
    let total_balance = 0.0
        for (let i = 0; i < accounts.length; i++) {
            total_balance += accounts[i].balance
        }
    return total_balance
}

class WalletTab extends React.Component {
    state = { accounts: [], currency: []}

    componentDidMount(){
        let data
  
        axios.get('http://127.0.0.1:8000/finances/accs_base_data/1') 
        .then(res => { 
            data = res.data; 
            this.setState({ accounts : data }); 
        }).catch(err => {}) 

        axios.get('http://127.0.0.1:8000/finances/sys_balance/1') 
        .then(res => { 
            data = res.data; 
            this.setState({ currency : data[0] }); 
        }).catch(err => {}) 
    }

    render() {
        return (
            <div className='wallet_container'>
                <div className="total_wallet_block">
                    <div className='total_balance_block'>
                        <span id='balance_exists'>Доступно</span>
                        <div>
                            <p className='balance_main_sum'>{get_total_balance(this.state.accounts)}</p>
                            <p className='balance_main_currency'>{this.state.currency.currency}</p>
                        </div>
                    </div>
                    <div className='change_wallet_btns'>
                        <Link to='change_bal' className='trans_btn_block'>
                            <div className='trans_btn'>+</div>
                            <span className='trans_btn_alt'>Зачислить</span>
                        </Link>
                        <Link to='change_bal' className='trans_btn_block'>
                            <div className='trans_btn'>-</div>
                            <span className='trans_btn_alt'>Списать</span>
                        </Link>
                        <Link to='change_bal' className='trans_btn_block'>
                            <div className='trans_btn'>
                                <img src={TransSendIcon} id='send_trans_icon'/>
                            </div>
                            <span className='trans_btn_alt'>Перевести</span>
                        </Link>
                    </div>
                    <Routes>
                        <Route path='change_bal' element={ <ChangeAccBalance/> }/>
                    </Routes>
                    <div className='wallet_trans_history'>
                        <input placeholder='Поиск по истории'/>
                        <div className='search_filters'>
                            <a href="#"className='search_filter_btn active'>. . .</a>
                            <a href="#"className='search_filter_btn'>Пополнения</a>
                            <a href="#"className='search_filter_btn'>Списания</a>
                            <a href="#"className='search_filter_btn'>Сервисные</a>
                            <a href="#"className='search_filter_btn'>Неделя</a>
                            <a href="#"className='search_filter_btn'>Месяц </a>
                        </div>
                    </div>  
                </div>

                <div className='bank_accounts_block'>
                    {this.state.accounts.map((output, id) => (
                        <a href='#' key={id}>
                            <div className='bank_account_widget'>
                            <img className='widget_polygon' src={put_account_color(output.color)[1]}/>
                            <p className='bank_account_name'>{output.name}</p>
                            <p className='bank_account_balance'>{output.balance}</p>
                            <p className='bank_account_holder'>{output.holder}</p>
                            <div className='bank_account_details'>
                            <p className='bank_account_num'>{output.card_number}</p>
                            <p className='bank_account_expires'>{output.date_expires}</p>
                            <p className='bank_account_currency' style={put_account_color(output.color)[0]}>{output.currency}</p>
                        </div>   
                    </div>
                        </a>
                    ))}
                    <a href="#" className='bank_account_widget' id='add_bank_account'>Добавить счёт</a>
                </div>
            </div>
        )
    }
}

export {WalletTab}