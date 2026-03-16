import { StyleSheet, Text, View, FlatList } from 'react-native';

import { CATEGORIES } from 'data/dummy-data'
import  Colors  from 'constants/colors'
import  Layout  from 'constants/layout'
import Category from 'models/category';

import CategoryGridTile from 'components/CategoryGridTile';

function RenderCategoryItem(itemData: { item: Category }) {
    return <CategoryGridTile category={itemData.item} />
}

function CategoriesScreen() {
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