import { Pressable, View, Text, StyleSheet } from "react-native";
import type Category from "models/category";
import LAYOUT from "constants/layout";


function CategoryGridTile({category}: {category: Category}) {
    return <View style={styles.gridItem}>
        <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <View style={[styles.innerContainer, {backgroundColor: category.color}]}>
                <Text style={styles.itemText}>{category.title}</Text>
            </View>
        </Pressable>
    </View>
}

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: LAYOUT.gap,
        aspectRatio: 1,
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.4,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 5,
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.8,
    },
    innerContainer: {
        flex: 1,
        borderRadius: LAYOUT.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',        
    }
});

export default CategoryGridTile;