import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { AffordabilityPill, ComplexityPill, TextPill } from './MealItemFields';

import LAYOUT from 'constants/layout';
import Colors from 'constants/colors';

import {Complexity, type Meal} from 'models/meal';




function MealItem({ meal }: { meal: Meal }) {
    var conditionalPills = [];
    if (meal.isGlutenFree) {
        conditionalPills.push(<TextPill key='glutenFree' text='Gluten Free' />);
    }
    if (meal.isVegan) {
        conditionalPills.push(<TextPill key='vegan' text='Vegan' />);
    } else if (meal.isVegetarian) {
        conditionalPills.push(<TextPill key='vegetarian' text='Vegetarian' />);
    }
    if (meal.isLactoseFree) {
        conditionalPills.push(<TextPill key='lactoseFree' text='Lactose Free' />);
    }
    
    
    return (
        <View style={styles.itemContainer}>
            <Text>{meal.title}</Text>

            <View style={styles.bodyContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: meal.imageUrl }} />
                    <View style={styles.imageUnderlay} />
                </View>
                <View style={styles.leftHandPillsContainer}>
                    <AffordabilityPill affordability={meal.affordability} />
                    <ComplexityPill complexity={meal.complexity} />
                    <TextPill text={`${meal.duration}m`} />
                </View>
                <View style={styles.rightHandPillsContainer}>
                    {conditionalPills}
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        borderRadius: LAYOUT.borderRadius,
        backgroundColor: Colors.primary4,
    },
    bodyContainer:{
        width: '100%',
        minHeight: 200,
    },
    imageContainer: {
        flex:1,
    },
    imageUnderlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
    },
    leftHandPillsContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        gap: LAYOUT.gap,
        padding: LAYOUT.padding,
        alignItems: 'flex-start',
    },
    rightHandPillsContainer: {
        position: 'absolute',
        top: 0,
        right: 0,
        gap: LAYOUT.gap,
        padding: LAYOUT.padding,
        alignItems: 'flex-end',

    },
    categoriesList:{
        flex:1,
    },
});


export default MealItem;