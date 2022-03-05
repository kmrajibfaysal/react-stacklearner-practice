import React from 'react';
import Profile from './profile/index';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
    render() {
        return (
            <div>
                <Profile />
                {/* <div>
                    <MyProps name="Faysal" />
                    <MyProps name="Rajib" />
                    <MyProps name="olos" />
                </div> */}
            </div>
        );
    }
}

export default App;
