import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import { AffordabilityPill, ComplexityPill, DurationPill, TextPill } from 'components/MealItem/MealItemFields';
import { MealIngredients } from 'components/MealItem/MealIngredients';
import { MealInstructions } from 'components/MealItem/MealInstructions';

import LAYOUT from 'constants/layout';
import Colors from 'constants/colors';

import {Complexity, type Meal} from 'models/meal';




function MealItem({ meal }: { meal: Meal }) {
    var conditionalPills = [];
    if (meal.isGlutenFree) {
        conditionalPills.push(<TextPill key='glutenFree' text='Gluten Free' backGroundColor={Colors.primary2} textColor='white'/>);
    }
    if (meal.isVegan) {
        conditionalPills.push(<TextPill key='vegan' text='Vegan' backGroundColor={Colors.primary2} textColor='white' />);
    } else if (meal.isVegetarian) {
        conditionalPills.push(<TextPill key='vegetarian' text='Vegetarian' backGroundColor={Colors.primary2} textColor='white' />);
    }
    if (meal.isLactoseFree) {
        conditionalPills.push(<TextPill key='lactoseFree' text='Lactose Free' backGroundColor={Colors.primary2} textColor='white' />);
    }
    
    
    return (
        <View style={styles.itemContainer}>
            <Text style={styles.mealTitle}>{meal.title}</Text>

            <View style={styles.bodyContainer}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: meal.imageUrl }} />
                    <View style={styles.imageUnderlay} />
                </View>
                <View style={styles.leftHandPillsContainer}>
                    <AffordabilityPill affordability={meal.affordability} />
                    <ComplexityPill complexity={meal.complexity} />
                    <DurationPill number={meal.duration} />
                </View>
                <View style={styles.rightHandPillsContainer}>
                    {conditionalPills}
                </View>

            </View>
            <MealIngredients ingredients={meal.ingredients} />
            <MealInstructions instructions={meal.steps} />

        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        borderRadius: LAYOUT.borderRadius,
        backgroundColor: Colors.primary4,
        padding: LAYOUT.padding,
    },
    mealTitle:{
        fontSize: 18,
        fontWeight: 'bold',
    },
    bodyContainer:{
        width: '100%',
        minHeight: 200,
    },
    imageContainer: {
        flex:1,
        borderRadius: LAYOUT.borderRadius,
    },
    imageUnderlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: LAYOUT.borderRadius,
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