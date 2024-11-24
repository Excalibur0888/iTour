import {Text, ScrollView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

const TransportComponent = () => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.text}>Транспорт</Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        color: '#000',
        fontSize: 24,
    },
});
export default TransportComponent;
