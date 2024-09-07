import { Link } from 'react-router-dom'

const linksClasses = 'header-li-item link-gray'

const profileIcon = require('../static/images/profile_pic.png')
const notificationsIcon = require('../static/images/icons/notification-icon.png')
const settingsIcon = require('../static/images/icons/settings-icon.png')

const Header = () => {
    return (
        <header>
            <div className='header-container'>
                <div className='header-left-block'>
                    <Link to="/" id='header-logo'>ZONTIK</Link>
                </div>
                <div className='header-mid-block'>
                    <Link to="/finances" className={linksClasses}>Финансы</Link>
                    <Link to="/organizer" className={linksClasses}>Органайзер</Link>
                    <Link to="/tools" className={linksClasses}>Инструменты</Link>
                    <Link to="/analytics" className={linksClasses}>Аналитика</Link>
                </div>
                <div className='header-right-block'>
                    <div className='header-sett-item' id='balance'>
                        <p id="balance_currency">₽</p>
                        <p id="balance_value">20034.01</p>
                        <div id='add_balance'><span>+</span></div>
                    </div>
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

export {Header}