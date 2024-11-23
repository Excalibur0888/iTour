import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { gStyle } from '../../styles/style';
import Header from '../Header/Header';
import Favourite from './Favourite';

const Profile = () => {
    return (
        <View style={gStyle.main}>
            <Header />
            
            <View style={styles.profileContainer}>
                <View style={styles.userInfo}>
                    <Image 
                        style={styles.avatar}
                        source={require('../../assets/avatar1.jpg')} 
                    />
                    <Text style={styles.userName}>Андрей Иваков</Text>
                    <Text style={styles.userRole}>Опытный турист</Text>
                    
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Изменить профиль</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.button, styles.buttonSecondary]}>
                            <Text style={styles.buttonText}>Изменить пароль</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.statsContainer}>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>23</Text>
                        <Text style={styles.statLabel}>Пройдено маршрутов</Text>
                    </View>
                    <View style={styles.statBox}>
                        <Text style={styles.statNumber}>12</Text>
                        <Text style={styles.statLabel}>Посещенных городов</Text>
                    </View>
                </View>
				<View style={styles.line}>
					<TouchableOpacity style={[styles.lineItem, styles.scores]}>
						<Text style={styles.lineText}>Баллы iTour</Text>
						<View style={styles.starContainer}>
							<Image source={require('../../assets/star.png')} style={styles.star} />
							<Text style={styles.scoresText}>152</Text>
							<Text style={styles.arrow}>›</Text>
						</View>
					</TouchableOpacity>
					
					<TouchableOpacity style={[styles.lineItem]}>
						<Text style={styles.lineText}>Выгодные предложения</Text>
						<Text style={styles.arrow}>›</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.lineItem}>
						<Text style={styles.lineText}>Мои маршруты</Text>
						<Text style={styles.arrow}>›</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.lineItem}>
						<Text style={styles.lineText}>Избранное</Text>
						<Text style={styles.arrow}>›</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.lineItem}>
						<Text style={styles.lineText}>Настройки</Text>
						<Text style={styles.arrow}>›</Text>
					</TouchableOpacity>
				</View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    profileContainer: {
        padding: 20,
    },
    userInfo: {
        alignItems: 'center',
        marginBottom: 20,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
        borderWidth: 3,
        borderColor: '#4A6EE0', 
        shadowColor: '#0ff', 
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 5,
    },
    userName: {
		fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userRole: {
		fontFamily: 'Montserrat-SemiBold',
        fontSize: 14,
        color: '#666',
        marginBottom: 15,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
    },
    button: {
		fontFamily: 'Montserrat-SemiBold',
        backgroundColor: '#4A6EE0',
        paddingVertical: 12,
        paddingHorizontal: 15,
        borderRadius: 15,
        marginRight: 10,
    },
    buttonSecondary: {
		fontFamily: 'Montserrat-SemiBold',
        backgroundColor: '#6B7280',
    },
    buttonText: {
		fontFamily: 'Montserrat-SemiBold',
        color: 'white',
        fontSize: 14,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    statBox: {
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    statNumber: {
		fontFamily: 'Montserrat-SemiBold',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#4A6EE0',
    },
    statLabel: {
		fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#666',
    },
    scores: {
		paddingHorizontal: 20,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
        backgroundColor: '#FFF',
    },
    listContainer: {
        marginTop: 20,
    },
    listTitle: {
		fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: '#666',
        marginBottom: 10,
    },
    listItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E7EB',
    },
    itemNumber: {
		fontFamily: 'Montserrat-SemiBold',
        color: '#666',
        fontSize: 14,
    },
    itemText: {
		fontFamily: 'Montserrat-SemiBold',
        flex: 1,
        marginLeft: 10,
        fontSize: 14,
    },
    itemStatus: {
		fontFamily: 'Montserrat-SemiBold',
        color: '#4A6EE0',
        fontSize: 14,
    },
	line: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	lineItem: {
		flexDirection: 'row',
		alignItems: 'center',
		width: '100%',
		height: 60,
		padding: 15,
		backgroundColor: '#FFF',
		justifyContent: 'space-between',
		borderRadius: 15,
		marginBottom: 10,
	},
	lineText: {
		fontSize: 14,
		color: '#666',
	},
	scoresText: {
		fontSize: 14,
        marginLeft: 5,
        color: '#4A6EE0',
	},
	star: {
		width: 30,
		height: 30,
	},
	starContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	arrow: {
		fontSize: 26,
	},
});

export default Profile;