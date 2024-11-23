import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  ImageBackground,
  Image,
  Modal,
  Pressable,
  TouchableHighlight,
} from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import Icon from 'react-native-vector-icons/Ionicons';

const ChatDialog = ({ route, navigation }) => {
  const { chatName, avatar, initialMessages } = route.params;
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const sendMessage = () => {
    if (!inputMessage.trim()) return;

    setMessages([
      ...messages,
      {
        id: messages.length + 1,
        text: inputMessage,
        isRead: false,
        isSentByUser: true,
      },
    ]);
    setInputMessage('');
  };

  const handleLongPress = (message) => {
    setSelectedMessage(message);
    setIsMenuVisible(true);
  };

  const handleDeleteMessage = () => {
    setMessages(messages.filter((msg) => msg.id !== selectedMessage.id));
    setIsMenuVisible(false);
  };

  const handleReplyMessage = () => {
    setInputMessage(`Ответ на: "${selectedMessage.text}" `);
    setIsMenuVisible(false);
  };

  const attachFile = async () => {
    try {
      const result = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setMessages([
        ...messages,
        {
          id: messages.length + 1,
          text: `📎 Файл: ${result[0].name}`,
          isRead: false,
          isSentByUser: true,
        },
      ]);
    } catch (err) {
      if (!DocumentPicker.isCancel(err)) {
        console.error('Ошибка при выборе файла:', err);
      }
    }
  };

  const renderMessage = ({ item }) => (
    <TouchableHighlight
      onLongPress={() => handleLongPress(item)}
      style={[
        styles.messageContainer,
        item.isSentByUser ? styles.userMessage : styles.receivedMessage,
      ]}
    >
      <View>
        <Text style={styles.messageText}>{item.text}</Text>
        {item.isSentByUser && (
          <Text style={styles.statusIcon}>
            {item.isRead ? '✔✔' : '✔'}
          </Text>
        )}
      </View>
    </TouchableHighlight>
  );

  return (
    <ImageBackground
      source={require('../../assets/chatbg.jpg')}
      style={styles.container}
      resizeMode="cover"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Image source={avatar} style={styles.avatar} />
        <View style={styles.chatInfo}>
          <Text style={styles.chatTitle}>{chatName}</Text>
          <Text style={styles.onlineStatus}>В сети</Text>
        </View>
      </View>

      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id.toString()}
        style={styles.messagesList}
        contentContainerStyle={{ paddingBottom: 10 }}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={attachFile}>
          <Icon name="attach" size={25} color="#007AFF" style={styles.attachmentIcon} />
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Введите сообщение..."
          placeholderTextColor="#aaa"
          value={inputMessage}
          onChangeText={setInputMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Icon name="send" size={18} color="white"></Icon>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isMenuVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setIsMenuVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setIsMenuVisible(false)}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={handleReplyMessage} style={styles.menuItem}>
              <Text style={styles.menuText}>Ответить</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDeleteMessage} style={styles.menuItem}>
              <Text style={[styles.menuText, { color: 'red' }]}>Удалить</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  backButton: {
    marginRight: 20,
  },
  chatInfo: {
    marginLeft: 10,
  },
  chatTitle: {
    fontSize: 18,
		fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },
  onlineStatus: {
    fontSize: 12,
		fontFamily: 'Montserrat-Medium',
    color: '#000',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  messagesList: {
    flex: 1,
    padding: 10,
  },
  messageContainer: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    maxWidth: '70%',
  },
  userMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  receivedMessage: {
    backgroundColor: '#858585',
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
		fontFamily: 'Montserrat-Medium',
    color: '#fff',
  },
  statusIcon: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: '#fff',
  },
  sendButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
  },
  attachmentIcon: {
    marginRight: 10,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuItem: {
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
});

export default ChatDialog;
