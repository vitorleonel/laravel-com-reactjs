import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {

    render () {
        return (
            <div className="navbar has-shadow">
                <div className="container">
                    <div className="navbar-brand">
                        <h1 className="navbar-item">
                            <span className="title is-5">Laravel com ReactJs</span>
                        </h1>

                        <span className="navbar-burger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>

                    <div className="navbar-menu">
                        <div className="navbar-end">
                            <Link to="/" className="navbar-item">Início</Link>
                            <Link to="/login" className="navbar-item">Entrar</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Navbar