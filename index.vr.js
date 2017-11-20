import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  VrButton
} from 'react-vr';

export default class WelcomeToVR extends React.Component {

    render() {
        return (
            <View>
                <Pano source={asset('222.jpg')}/>
                <NestedMessage message={"Default Message"}/>
            </View>
        );
    }
};

class  NestedMessage extends React.Component {

    constructor() {
        super();
        this.state = {message: "ReactVr Start Message"};
        setInterval(() => {
            this.setState({ message: "Interval Up Message"});
        },6000);
    }

    handleClick () {
        this.setState ({message: "Button Up Message"});
    }

    render() {
        return (
            <View>
                <VrButton
                onClick={this.handleClick.bind(this)}
                >
                    <Text
                        style={{
                            backgroundColor: 'rgba(0,0,0,0.4)',
                            fontSize: 0.8,
                            color: '#bada55',
                            fontWeight: '400',
                            layoutOrigin: [0.5, 0.5],
                            paddingLeft: 0.2,
                            paddingRight: 0.2,
                            textAlign: 'center',
                            textAlignVertical: 'center',
                            transform: [
                                {translate: [0, 0.2, -5]},
                                //{rotateY: this.state.rotation},
                                {rotateX: 20},
                                {rotateZ: -10}
                            ],
                        }}>
                        {this.state.message}
                        , {this.props.message}
                    </Text>
                </VrButton>
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
