import { Link, NavLink } from 'react-router-dom'
import { HandySvg } from 'handy-svg'

import '../static/styles/tabs-nav.css'

/*icons*/
import OverallIcon from '../static/images/icons/overall-icon-gray.png'
import WalletIcon from '../static/images/icons/wallet-icon-gray.svg' 
import AssetsIcon from '../static/images/icons/assets-icon.png'
import LiabilitiesIcon from '../static/images/icons/liabilities-icon.png'


const tabsClasses = "left-side-nav-tab"


const FinancesTabsNav = () => {
    return (
        <nav className='left-side-nav'>
            <NavLink to="" end className={tabsClasses}>
                <img className='tab-icon' src={OverallIcon}/>
                Быстрый доступ
            </NavLink>
            <NavLink to="wallet" className={tabsClasses}>
            {/*example of SVG usage*/}
                <HandySvg
                    src={WalletIcon}
                    className="tab-icon"
                    width="14"
                    height="14"
                /> 
                Кошелёк
            </NavLink>
            <NavLink to="assets" className={tabsClasses}>
                <img className='tab-icon' src={AssetsIcon}/>
                Пассивы
            </NavLink>
            <NavLink to="liabilities" className={tabsClasses}>
                <img className='tab-icon' src={LiabilitiesIcon}/>
                Активы
            </NavLink>
            <div className='nav-news-block'></div>
        </nav>
    )
}

export {FinancesTabsNav}