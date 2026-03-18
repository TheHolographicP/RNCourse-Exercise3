import type { CompositeScreenProps } from '@react-navigation/native';
import type { DrawerScreenProps } from '@react-navigation/drawer';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
    CategoriesList: undefined;
    HomeScreen: undefined;
    CategoryView: { categoryId: string };
    MealView: { mealId: string };
};

export type RootDrawerParamList = {
    CategoriesList: undefined;
    FavoritesView: undefined;
};

export type MealsListNavigationProp = {
    navigate: (screen: 'MealView', params: RootStackParamList['MealView']) => void;
};

export type FavoritesViewScreenProps = CompositeScreenProps<
    DrawerScreenProps<RootDrawerParamList, 'FavoritesView'>,
    NativeStackScreenProps<RootStackParamList>
>;