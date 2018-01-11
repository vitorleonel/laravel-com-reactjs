import React, { Component } from 'react'
import { Route } from 'react-router-dom'

// components
import NavbarComponent from './Navbar'

// containers
import HomeContainer from '../containers/Home'
import SignInContainer from '../containers/SignIn'

class App extends Component {

    render () {
        return (
            <div>
                <NavbarComponent />

                <div className="container">
                    <Route path="/" exact component={HomeContainer} />
                    <Route path="/login" component={SignInContainer} />
                </div>
            </div>
        )
    }

}

export default App