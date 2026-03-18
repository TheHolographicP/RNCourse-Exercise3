import { View, FlatList, StyleSheet, Pressable } from 'react-native';
import type { MealsListNavigationProp } from 'types/navigation';

import { MealItem } from 'components/MealList/MealItem/MealItem';
import type { Meal } from 'models/meal';
import LAYOUT from 'constants/layout';
import Colors from 'constants/colors';

type Props = {
    meals: Meal[];
    navigation: MealsListNavigationProp;
};

export function MealsList({ meals, navigation }: Props) {

    const displayedMeals = meals;

    function renderMealItem(itemData: { item: Meal }) {
        return <View style={styles.itemContainer}>
            <Pressable onPress={() => {
                    navigation.navigate('MealView', { mealId: itemData.item.id });
                }}
                style={({ pressed }) => pressed ? styles.buttonPressed : null}
            >
                <MealItem meal={itemData.item} />
            </Pressable>
        </View>;
    }

    function renderSeparator() {
        return <View style={{ height: 1, backgroundColor: '#ccc', marginVertical: LAYOUT.gap, width: '80%', alignSelf: 'center' }} />;
    }

    return (
        <View>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
                ItemSeparatorComponent={renderSeparator}
            />
        </View>
    );
}



const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: LAYOUT.borderRadius,
        backgroundColor: Colors.primary4,
        padding: LAYOUT.padding,
    },
    buttonPressed: {
        opacity: 0.8,
    },
});
