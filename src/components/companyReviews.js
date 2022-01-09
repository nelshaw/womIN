import React from 'react'
import CompanyOverview from './companyOverview';
import CompanyDashboard from './companyDashboard';
import './companyReview.css'

function CompanyReviews() {
    return (
        <div className="companyReviewBlock">
            <div class="companyReviewWidget">
                <CompanyDashboard/>
                <CompanyOverview/>
            </div>
        </div>
    );
}

export default CompanyReviews