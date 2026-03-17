import { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'types/navigation';

import { MealIngredients } from 'components/MealItem/MealIngredients';
import { MealInstructions } from 'components/MealItem/MealInstructions';
import { MealItem } from 'components/MealItem/MealItem';

import LAYOUT from 'constants/layout';
import Colors from 'constants/colors';

import {Complexity, type Meal} from 'models/meal';
import { MEALS } from 'data/dummy-data';


type Props = NativeStackScreenProps<RootStackParamList, 'MealView'>;

export function MealView({ route, navigation }: Props) {   
    const { mealId } = route.params;
    const meal = MEALS.find((meal) => meal.id === mealId);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: meal ? meal.title : 'Meal',
        });
    }, [meal, navigation]);

    if (!meal) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorTitle}>Meal not found</Text>
                <Text style={styles.errorText}>The requested meal could not be loaded.</Text>
            </View>
        );
    }

    return (
        <ScrollView style={styles.itemContainer}>
            <MealItem meal={meal}/>
            <MealIngredients ingredients={meal.ingredients} />
            <MealInstructions instructions={meal.steps} />

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    itemContainer:{
        flex:1,
        borderRadius: LAYOUT.borderRadius,
        backgroundColor: Colors.primary4,
        padding: LAYOUT.padding,
        gap: LAYOUT.gap,
    },
    errorContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: LAYOUT.padding,
        backgroundColor: Colors.primary4,
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.primary3,
        marginBottom: 8,
    },
    errorText: {
        fontSize: 16,
        textAlign: 'center',
        color: Colors.primary3,
    },
    
});


export default MealItem;