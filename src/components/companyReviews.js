import React from 'react'
import CompanyOverview from './companyOverview';
import Search from './search';
import CompanyDashboard from './companyDashboard';
import './companyReview.css'

function CompanyReviews() {
    return (
        <div className="companyReviewBlock">
            {/* <Search/> */}
            <div class="companyReviewWidget">
                <CompanyDashboard/>
                <CompanyOverview/>
            </div>
        </div>
    );
}

export default CompanyReviews