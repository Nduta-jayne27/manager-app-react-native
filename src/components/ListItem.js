import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { CardSection } from './common';

class ListItem extends Component {
    render() {
        const { name } = this.props.employee;
        return (
            <CardSection>
                <View>
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
                </View>
            </CardSection>

        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15,
        color: 'black'
    }
};

export default ListItem;
