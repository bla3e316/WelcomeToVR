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
                <Pano source={asset('333.jpg')}/>
                <NestedMessage message={"Default Message"}/>
            </View>
        );
    }
};

class  NestedMessage extends React.Component {

    constructor() {
        super();
        this.state = {message: "ReactVR", showMessage: true};
        // setInterval(() => {
        //     this.setState({ message: "Hello From ReactVr Project"});
        // },5000);
    }

    componentDidMount () {
        this.setState({ showMessage: true });
    }

    handleClick () {
        this.setState ({message: "Button Pressed"});
    }

    render() {
        const showMessage = this.state.showMessage;

        return (
            <View>
                {showMessage ?(
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
                        {/*, {this.props.message}*/}
                    </Text>
                </VrButton>
                    ) : (
                        <Text>
                             Hello From ReactVr
                        </Text>
                    ) }
            </View>
        );
    }
};

AppRegistry.registerComponent('WelcomeToVR', () => WelcomeToVR);
