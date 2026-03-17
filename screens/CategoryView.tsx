import { View, Text, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'types/navigation';

import { MEALS } from 'data/dummy-data'

import MealItem from 'components/MealItem/MealItem';
import type {Meal} from 'models/meal';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryView'>;

function CategoryView({ route }: Props) {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

    function renderMealItem(itemData: { item: Meal }) {
        return <MealItem meal={itemData.item} />;
    }

    return (
        <View>
            <Text>{route.params.categoryId}</Text>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    );
}

export default CategoryView;