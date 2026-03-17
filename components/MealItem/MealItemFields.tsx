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


