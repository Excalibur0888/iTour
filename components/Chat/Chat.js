import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Header from '../Header/Header';

const Chat = () => {
	return (
		<View style={styles.main}>
			<Header/>
			<Text style={styles.title}>Сообщения</Text>
			<View style={styles.chatList}>
				<View style={styles.chatItem}>
					<Image 
						source={require('../../assets/avatar1.jpg')}
						style={styles.avatar}
					/>
					<View style={styles.chatContent}>
						<Text style={styles.chatName}>Андрей Иваков</Text>
						<Text style={styles.lastMessage}>Привет! Собираешься на Алтай?</Text>
					</View>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadText}>2</Text>
					</View>
				</View>
				<View style={styles.chatItem}>
					<Image
						source={require('../../assets/avatar2.jpg')}
						style={styles.avatar}
					/>
					<View style={styles.chatContent}>
						<Text style={styles.chatName}>Никита Перекрест</Text>
						<Text style={styles.lastMessage}>До новых встреч!</Text>
					</View>
				</View>
				<View style={styles.chatItem}>
					<Image
						source={require('../../assets/avatar3.jpg')}
						style={styles.avatar}
					/>
					<View style={styles.chatContent}>
						<Text style={styles.chatName}>Дмитрий Аккуратов</Text>
						<Text style={styles.lastMessage}>Видел твой маршрут по Алтаю. Интересно!</Text>
					</View>
					<View style={styles.unreadBadge}>
						<Text style={styles.unreadText}>1</Text>
					</View>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 15
	},
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 20,
		color: '#000'
	},
	chatList: {
		flex: 1
	},
	chatItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 15,
		marginBottom: 10,
		borderRadius: 10,
		backgroundColor: '#fff',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},
	chatName: {
		fontSize: 18,
		fontWeight: '600',
		color: '#000',
		marginBottom: 5
	},
	lastMessage: {
		fontSize: 14,
		color: '#666'
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 15
	},
	chatContent: {
		flex: 1
	},
	unreadBadge: {
		backgroundColor: '#007AFF',
		width: 20,
		height: 20,
		borderRadius: 10,
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: 10
	},
	unreadText: {
		color: '#fff',
		fontSize: 12,
		fontWeight: 'bold'
	}
});

export default Chat;
