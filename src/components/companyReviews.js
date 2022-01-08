import React from 'react'
import CompanyOverview from './companyOverview';
import Search from './search';
import Topbar from './topbar';

const CompanyReviews = () => {
    return (
        <div>
            <Topbar/>
            <Search/>
            <CompanyOverview/>
        </div>
    );
}

export default CompanyReviews