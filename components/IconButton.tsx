import {Pressable, PressableProps, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from 'constants/colors';
import LAYOUT from 'constants/layout';

type IconButtonProps = PressableProps & {
    icon: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
    color?: string;
    size?: number;
};

export function IconButton({ icon, onPress, color = Colors.primary1, size = 24, ...rest }: IconButtonProps) {
    const styles = StyleSheet.create({
        button: {
            height: 35,
            width: 35,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });

    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                {
                    opacity: pressed ? 0.7 : 1,
                },
            ]}
            {...rest}
        >
            <Ionicons name={icon} size={size} color={color} style={{lineHeight:size}}/>
        </Pressable>
    );
}

