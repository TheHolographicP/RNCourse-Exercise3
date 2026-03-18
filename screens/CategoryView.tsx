import { useLayoutEffect } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import type { RootStackParamList } from 'types/navigation';

import { CATEGORIES, MEALS } from 'data/dummy-data'

import { MealsList } from 'components/MealList/MealsList';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryView'>;

function CategoryView({ route, navigation }: Props) {
    const { categoryId } = route.params;

    const displayedMeals = MEALS.filter((meal) => meal.categoryIds.indexOf(categoryId) >= 0);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: CATEGORIES.find((cat) => cat.id === categoryId)?.title || 'Category',
        });
    }, [categoryId, navigation]);

    return <MealsList meals={displayedMeals} navigation={navigation} />;
}
export default CategoryView;