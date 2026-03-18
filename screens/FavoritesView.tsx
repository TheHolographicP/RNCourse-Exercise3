import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FavoritesContext } from 'store/context/favorites-context';

import { MealsList } from 'components/MealList/MealsList';

import { MEALS } from 'data/dummy-data';
import LAYOUT from 'constants/layout';
import Colors from 'constants/colors';
import type { FavoritesViewScreenProps } from 'types/navigation';

type Props = FavoritesViewScreenProps;

export function FavoritesView({ navigation }: Props) {
    const favoriteMealsContext = useContext(FavoritesContext);
    
    const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id));
    return (
        <View >
            <MealsList meals={favoriteMeals} navigation={navigation} />
        </View>
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

});
