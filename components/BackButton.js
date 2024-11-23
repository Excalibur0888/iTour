import { TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';


const BackButton = ({}) => {
    const navigation = useNavigation();
    const handleGoBack = () => {
        navigation.goBack();
      };
    return (
      <TouchableOpacity style={localStyles.backButton} onPress={handleGoBack}>
        <Icon name="chevron-back" size={16} color="#000" />
      </TouchableOpacity>
    );
  };

const localStyles = StyleSheet.create({
    backButton: {
      position: 'absolute',
      top: 10,
      left: 15,
      backgroundColor: '#fff',
      borderRadius: 8,
			elevation: 10,
      padding: 12,
			zIndex: 5,
    },
});

export default BackButton;