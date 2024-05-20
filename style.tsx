import REact from 'react';
importr {StyleSheet, Text, View} from 'react-native';

const LotsOfStyles = () => {
    return (
        <View style={style.container}>
            <Text style={styles.red}>just red </text>
            <Text style={styles.bigBlue}>just bigblue </text>
            <Text style={styles.bigBlue, style.red}>just red, then red</text>
            <Text style={styles.red, style.bigBlue}>red, thenbigBlue </text>
            </View>
            );
            };

const styles = StyleSheet.create({
container: {
    marginTop: 50,
    },
    bigBlue:{
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
        },

        red: {
            color: 'red',
            },
            });

export default LotsOfStyles;

import React from 'react';
import {View} from 'react-native';

const FixedDimensionsBascis = () => {
    return (
    <View>
        <View
            style = {{
            width: 50,
            height: 50,
            backgroundColor: 'powderblue',
            marginLeft : 40,

            }}
            />
        <View
            style={{
            width: 100,
            height: 100,
            backgroundColor: 'skyblue',
            }}
            />
        <View
            style={{
            width: 150,
            height: 150,
            backgroundColor: 'steelblue',
            }}
        />
        </View>
        );
        };

export default FixedDimensionsBascis;

import React from 'react';
import {StyleSheet, View} from 'react-native';

const Flex = () => {
    return (
    <View
        style = {[
        styles.container,
        {
        flexDirection: 'column',
        },
    ]}>
    <View style={{flex: 1, backgroundColor: 'red'}} />
    <View style={{flex: 2, backgroundColor: 'darkorange'}} />
    <View style={{flex: 3, backgroundColor: 'green'}} />
    </View>
    );
    };

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        padding :20,
        },
        });

export default Flex;