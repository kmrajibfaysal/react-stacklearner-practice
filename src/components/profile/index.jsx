/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Bio from '../bio/index';
import './profile.style.css';

class Profile extends React.Component {
    render() {
        return (
            <div className="container">
                <Bio name="Faysal" title="FullStack Javascript Developer" />
                <div className="skills">
                    <h3>Skills:</h3>
                    <ul>
                        <li>Java</li>
                        <li>Javascript</li>
                        <li>Python</li>
                    </ul>
                </div>
                <div className="links">
                    <h3>Social Links:</h3>
                    <ul>
                        <li>
                            <a href="#">Facebook</a>
                        </li>
                        <li>
                            <a href="#">LinkedIn</a>
                        </li>
                        <li>
                            <a href="#">Github</a>
                        </li>
                        <li>
                            <a href="#">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Profile;
