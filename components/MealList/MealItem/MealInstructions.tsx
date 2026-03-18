import { Text, View, StyleSheet } from 'react-native';

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
            
            {instructions.map((item, index) => (
                <View key={index} style={styles.instructionItem}>
                    <Text style={styles.instructionText}>{`${index + 1}. ${item}`}</Text>
                </View>
            ))}
        </View>
    );
}