import { View, Text } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import type { RootStackParamList } from 'types/navigation';

type Props = NativeStackScreenProps<RootStackParamList, 'CategoryView'>;

function CategoryView({ route }: Props) {
    return (
        <View>
            <Text>{route.params.categoryId}</Text>
        </View>
    );
}

export default CategoryView;