import React from 'react'
import CompanyOverview from './companyOverview';
import Search from './search';
import Topbar from './topbar';
import CompanyDashboard from './companyDashboard';

const CompanyReviews = () => {
    return (
        <div>
            <Topbar/>
            <Search/>
        <div class="inline-block">
            <CompanyDashboard/>
            <CompanyOverview/>
            </div>
        </div>
    );
}

export default CompanyReviews