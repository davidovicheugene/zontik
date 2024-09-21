import { Routes, Route, Link } from 'react-router-dom'

import { FinancesTabsNav } from '../components/FinancesTabsNav'
import { OverallTab } from './finances/OverallTab'
import { WalletTab } from './finances/WalletTab'
import { AssetsTab } from './finances/AssetsTab'
import { LiabilitiesTab } from './finances/LiabilitiesTab'

const FinancesPage = () => {
    return (
        <>
                <FinancesTabsNav />
                <Routes>
                    <Route path='/' element={ <OverallTab/> }/>
                    <Route path='wallet/*' element={ <WalletTab/> }/>
                    <Route path='assets' element={ <AssetsTab/> }/>
                    <Route path='liabilities' element={ <LiabilitiesTab/> }/>
                </Routes>
        </>
    )
}

export {FinancesPage}