import React from 'react';
import Header from '../Header/Header';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Chat = ({ navigation }) => {
  const chats = [
    {
      id: 1,
      name: 'Андрей Иваков',
      lastMessage: 'Привет! Собираешься на Алтай?',
      avatar: require('../../assets/avatar1.jpg'),
      unreadCount: 2,
      messages: [
        { id: 1, text: 'Привет! Собираешься на Алтай?', isRead: true, isSentByUser: false },
      ],
    },
    {
      id: 2,
      name: 'Никита Перекрест',
      lastMessage: 'До новых встреч!',
      avatar: require('../../assets/avatar2.jpg'),
      messages: [
        { id: 1, text: 'До новых встреч!', isRead: true, isSentByUser: false },
      ],
    },
    {
      id: 3,
      name: 'Дмитрий Аккуратов',
      lastMessage: 'Видел твой маршрут по Алтаю. Интересно!',
      avatar: require('../../assets/avatar3.jpg'),
      unreadCount: 1,
      messages: [
        { id: 1, text: 'Видел твой маршрут по Алтаю. Интересно!', isRead: true, isSentByUser: false },
      ],
    },
  ];

  return (
    <View style={styles.main}>
      <Header />
      <Text style={styles.title}>Сообщения</Text>
      <View style={styles.chatList}>
        {chats.map((chat) => (
          <TouchableOpacity
            key={chat.id}
            style={styles.chatItem}
            onPress={() =>
              navigation.navigate('ChatDialog', {
                chatName: chat.name,
                avatar: chat.avatar,
                initialMessages: chat.messages,
              })
            }
          >
            <Image source={chat.avatar} style={styles.avatar} />
            <View style={styles.chatContent}>
              <Text style={styles.chatName}>{chat.name}</Text>
              <Text style={styles.lastMessage} numberOfLines={1} ellipsizeMode="tail">
                {chat.lastMessage}
              </Text>
            </View>
            {chat.unreadCount && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{chat.unreadCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
	main: {
		flex: 1,
		backgroundColor: '#fff',
	},
	chatContainer: {
		flex: 1,
		backgroundColor: '#fff',
		padding: 15
	},
	title: {
		fontSize: 24,
		fontFamily: 'Montserrat-SemiBold',
		marginBottom: 20,
		color: '#000',
		marginLeft: 15
	},
	chatList: {
		flex: 1,
		paddingHorizontal: 15,
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
		fontFamily: 'Montserrat-SemiBold',
		color: '#000',
		marginBottom: 5
	},
	lastMessage: {
		fontSize: 14,
		fontFamily: 'Montserrat-Medium',
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
