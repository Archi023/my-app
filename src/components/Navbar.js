import React from 'react';

class Navbar extends React.Component {
    
    render() { 
        return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className='container-fluid'>
        <a className="navbar-brand" href="#">My cart</a>
        </div>
      </nav>
    );
    }
}
export default Navbar;