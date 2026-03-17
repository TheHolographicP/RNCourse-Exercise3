import { Text, View, StyleSheet, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Affordability, Complexity } from 'models/meal';
import Colors from 'constants/colors';
import LAYOUT from 'constants/layout';


export function MealInstructions({ instructions }: { instructions: string[] }) {
    var styles = StyleSheet.create({
        instructionsContainer: {
            padding: LAYOUT.padding,
        },
        instructionsTitle: {
            fontSize: 18,
            fontWeight: 'bold',
            marginBottom: LAYOUT.gap,
        },
        instructionItem: {
            flexDirection: 'row',
            alignItems: 'center',
            gap: LAYOUT.gap / 2,
            marginBottom: LAYOUT.gap / 2,
        },
        instructionText: {
            fontSize: 16,
        },

    });
    
    return (
        <View style={styles.instructionsContainer}>
            <Text style={styles.instructionsTitle}>Instructions</Text>
            <FlatList
                data={instructions}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => (
                    <View style={styles.instructionItem}>
                        <Text style={styles.instructionText}>{`${index + 1}. ${item}`}</Text>
                    </View>
                )}
            />
        </View>
    );
}