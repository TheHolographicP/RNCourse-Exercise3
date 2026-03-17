import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Affordability, Complexity } from 'models/meal';
import Colors from 'constants/colors';
import LAYOUT from 'constants/layout';


export function AffordabilityPill({ affordability }: { affordability: Affordability }) {
    var styles = StyleSheet.create({
        affordabilityContainer: {
            backgroundColor: Colors.primary5,
            paddingHorizontal: LAYOUT.padding,
            paddingVertical: LAYOUT.padding / 2,
            borderRadius: 100,
            flexDirection: 'row',
            alignItems: 'center',
            gap: LAYOUT.gap / 2,
        },
        dollarSignContainer: {
            flexDirection: 'row',
        },
        dollarSignActive: {
            color: 'black'
        },
        dollarSignInactive: {
            color: '#9d9d9d'
        },

    });

    let affordabilityLevel = 0;
    switch (affordability) {
        case Affordability.Affordable:
            affordabilityLevel = 1;
            break;
        case Affordability.Pricey:
            affordabilityLevel = 2;
            break;
        case Affordability.Luxurious:
            affordabilityLevel = 3;
            break;
    }

    return (
        <View style={styles.affordabilityContainer}>
            <View style={styles.dollarSignContainer}>
                <Text style={styles.dollarSignActive}>$</Text>
                <Text style={affordabilityLevel >= 2 ? styles.dollarSignActive : styles.dollarSignInactive}>$</Text>
                <Text style={affordabilityLevel >= 3 ? styles.dollarSignActive : styles.dollarSignInactive}>$</Text>
            </View>
            <Text>{'\u2022'}</Text>
            <Text>{affordability}</Text>
        </View>
    );
}

export function ComplexityPill({ complexity }: { complexity: Complexity }) {
    var styles = StyleSheet.create({
        complexityContainer: {
            backgroundColor: Colors.primary5,
            paddingHorizontal: LAYOUT.padding,
            paddingVertical: LAYOUT.padding / 2,
            borderRadius: 100,
            flexDirection: 'row',
            alignItems: 'center',
            gap: LAYOUT.gap / 2,
        },
        cogContainer: {
            flexDirection: 'row',
        },
        cogActive: {
            color: 'black'
        },
        cogInactive: {
            color: '#9d9d9d'
        },

    });

    let complexityLevel = 0;
    switch (complexity) {
        case Complexity.Simple:
            complexityLevel = 1;
            break;
        case Complexity.Challenging:
            complexityLevel = 2;
            break;
        case Complexity.Hard:
            complexityLevel = 3;
            break;
    }

    return (
        <View style={styles.complexityContainer}>
            <View style={styles.cogContainer}>
                <Ionicons name='cog' color={complexityLevel >= 1 ? 'black' : '#9d9d9d'}/>
                <Ionicons name='cog' color={complexityLevel >= 2 ? 'black' : '#9d9d9d'}/>
                <Ionicons name='cog' color={complexityLevel >= 3 ? 'black' : '#9d9d9d'}/>
            </View>
            <Text>{'\u2022'}</Text>
            <Text>{complexity}</Text>
        </View>
    );
}

export function TextPill({ text, backGroundColor }: { text: string, backGroundColor?: string }) {
    var styles = StyleSheet.create({
        textContainer: {
            backgroundColor: backGroundColor || Colors.primary5,
            paddingHorizontal: LAYOUT.padding,
            paddingVertical: LAYOUT.padding / 2,
            borderRadius: 100,
        },
    });

    return (
        <View style={styles.textContainer}>
            <Text>{text}</Text>
        </View>
    );
}