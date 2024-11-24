import {Text, ScrollView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';


const FoodComponent = () => {
    <ScrollView style={styles.container}>
            <Text style={styles.text}>Рестораны</Text>
            <Icon name="restaurant" size={24} color="#000" />
    </ScrollView>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    text: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
    },
});

export default FoodComponent;