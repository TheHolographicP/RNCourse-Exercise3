import { Text, View, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import Colors from 'constants/colors';
import LAYOUT from 'constants/layout';


export function MealIngredients({ ingredients }: { ingredients: string[] }) {
    var styles = StyleSheet.create({
        ingredientsContainer: {
            padding: LAYOUT.padding,
        },
        ingredientsTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: LAYOUT.gap,
        },
        ingredientItem: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: LAYOUT.gap / 2,
            marginBottom: LAYOUT.gap / 2,
        },
        ingredientText: {
            fontSize: 16,
        },

    });
    
    return (
        <View style={styles.ingredientsContainer}>
            <Text style={styles.ingredientsTitle}>Ingredients</Text>
            {ingredients.map((item, index) => (
                <View key={index} style={styles.ingredientItem}>
                    <Ionicons name="checkmark-circle" size={16} color={Colors.primary1} />
                    <Text style={styles.ingredientText}>{item}</Text>
                </View>
            ))}
        </View>
    );
}