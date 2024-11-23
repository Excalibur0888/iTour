import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const BackButton = ({onPress}) => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
      };
    return (
      <TouchableOpacity style={localStyles.backButton} onPress={handleGoBack}>
        <Icon name="chevron-back" size={16} color="#bbb" />
      </TouchableOpacity>
    );
  };

const localStyles = StyleSheet.create({
    backButton: {
      position: 'absolute',
      top: 10,
      left: 30,
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 12,
    },
});

export default BackButton;