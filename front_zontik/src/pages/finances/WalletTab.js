import '../../static/styles/wallet.css'
import TransSendIcon from '../../static/images/icons/send_money_icon.png'
// Account Widgets Polygons
import WidgetPolygonOrangeIcon from '../../static/images/icons/account_widget_orange.png'
import WidgetPolygonRedIcon from '../../static/images/icons/account_widget_red.png'
import WidgetPolygonGreenIcon from '../../static/images/icons/account_widget_green.png'
import WidgetPolygonBlueIcon from '../../static/images/icons/account_widget_blue.png'

const WalletTab = () => {
    return (
        <div className='wallet_container'>
            <div className="total_wallet_block">
                <div className='total_balance_block'>
                    <span id='balance_exists'>Доступно</span>
                    <div>
                        <p className='balance_main_sum'>21 214.71</p>
                        <p className='balance_main_currency'>RUB</p>
                    </div>
                </div>
                <div className='change_wallet_btns'>
                    <a href='#' className='trans_btn_block'>
                        <div className='trans_btn'>+</div>
                        <span className='trans_btn_alt'>Доход</span>
                    </a>
                    <a href='#' className='trans_btn_block'>
                        <div className='trans_btn'>-</div>
                        <span className='trans_btn_alt'>Расход</span>
                    </a>
                    <a href='#' className='trans_btn_block'>
                        <div className='trans_btn'>
                            <img src={TransSendIcon} id='send_trans_icon'/>
                        </div>
                        <span className='trans_btn_alt'>Перевести</span>
                    </a>
                </div> 
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
                <div className='bank_account_widget'>
                    <img className='widget_polygon' src={WidgetPolygonOrangeIcon}/>
                    <p className='bank_account_name'>HALVA MIX</p>
                    <p className='bank_account_balance'>1016.83</p>
                    <p className='bank_account_holder'>YAUHENI DAVIDOVICH</p>
                    <div className='bank_account_details'>
                        <p className='bank_account_num'>2248 2980 4590 1671</p>
                        <p className='bank_account_expires'>08/27</p>
                        <p className='bank_account_currency' style={{color: '#FF9800'}}>BYN</p>
                    </div>   
                </div>
                <div className='bank_account_widget'>
                    <img className='widget_polygon' src={WidgetPolygonRedIcon}/>
                    <p className='bank_account_name'>Халва Плюс</p>
                    <p className='bank_account_balance'>182.59</p>
                    <p className='bank_account_holder'>YAUHENI DAVIDOVICH</p>
                    <div className='bank_account_details'>
                        <p className='bank_account_num'>5748 2953 4540 1622</p>
                        <p className='bank_account_expires'>02/25</p>
                        <p className='bank_account_currency' style={{color: '#EF3054'}}>BYN</p>
                    </div>   
                </div>
                <div className='bank_account_widget'>
                    <img className='widget_polygon' src={WidgetPolygonGreenIcon}/>
                    <p className='bank_account_name'>Кактус</p>
                    <p className='bank_account_balance'>0.00</p>
                    <p className='bank_account_holder'>YAUHENI DAVIDOVICH</p>
                    <div className='bank_account_details'>
                        <p className='bank_account_num'>4341 4353 6780 1202</p>
                        <p className='bank_account_expires'>01/26</p>
                        <p className='bank_account_currency' style={{color: '#61A940'}}>BYN</p>
                    </div>   
                </div>
                <div className='bank_account_widget'>
                    <img className='widget_polygon' src={WidgetPolygonBlueIcon}/>
                    <p className='bank_account_name'>SYSTEM BALANCE</p>
                    <p className='bank_account_balance'>20034.01</p>
                    <p className='bank_account_holder'>YAUHENI DAVIDOVICH</p>
                    <div className='bank_account_details'>
                        <p className='bank_account_num'>0000 0000 0000 0000</p>
                        <p className='bank_account_expires'>00/00</p>
                        <p className='bank_account_currency' style={{color: '#3A35FB'}}>RUB</p>
                    </div>   
                </div>
            </div>
        </div>
    )
}

export {WalletTab}