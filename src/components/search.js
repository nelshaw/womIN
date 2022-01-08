import React, { Component } from 'react';
import './search.css';

class Search extends React.Component {
	render() {
		return (
    
            <html lang="en">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Search Field</title>
                    <link rel="stylesheet" href="search.css" />
                </head>
                <body>
                    <div class="container">
                        <form action="/" method="GET" class="form">
                            <input type="search" placeholder="Search" class="search-field" />
                            <button type="submit" class="search-button">
                            <img 
                            src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png"
                            alt="new"
                            />
                            </button>
                        </form>
                    </div>
                </body>
            </html>
        );
    }
}

export default Search;