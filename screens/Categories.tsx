import { StyleSheet, View, FlatList } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type Category from 'models/category';
import type { RootStackParamList } from 'types/navigation';

import { CATEGORIES } from 'data/dummy-data'

import CategoryGridTile from 'components/CategoryGridTile';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoriesList'>;

function CategoriesScreen({navigation}: Props) {

    function RenderCategoryItem(itemData: { item: Category }) {
        function pressHandler() {
            navigation.navigate('CategoryView', {
                categoryId: itemData.item.id,
            });
        }

        return <CategoryGridTile category={itemData.item} onPress={pressHandler} />
    }

    return <View style={styles.categoriesList}>
        <FlatList 
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={RenderCategoryItem}
            numColumns={2}
        />
    </View>
}


const styles = StyleSheet.create({
    rootScreen:{
        flex:1,
    },
    categoriesList:{
        flex:1,
    },
});

export default CategoriesScreen;