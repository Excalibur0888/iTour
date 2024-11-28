import React from 'react';
import {  View, StyleSheet, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
const stories = [
  { id: 1, username: 'Дмитрий', avatarSource: require('../../assets/avatar4.jpg') },
  { id: 2, username: 'Никита', avatarSource: require('../../assets/avatar2.jpg') },
  { id: 3, username: 'Дмитрий', avatarSource: require('../../assets/avatar3.jpg') },
  { id: 4, username: 'Алена', avatarSource: require('../../assets/avatar5.jpg') },
  { id: 5, username: 'Лев', avatarSource: require('../../assets/avatar4.jpg') },
  { id: 6, username: 'Алексей', avatarSource: require('../../assets/avatar6.jpg') },
];

const StoryItem = ({ username, avatarSource}) => {
    return (
      <View style={styles.storyItem}>
          <Image
            style={styles.storyAvatar}
            source={avatarSource}
          />
          <Text style={styles.storyUsername}>{username}</Text>
      </View>
    );

}

const PostItem = ({ userAvatar, userName, timeAgo, text, images, numberOfViews }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullText, setShowFullText] = useState(false);
  const paragraphs = text.split('\n\n');
  return (
    <View style={styles.post}>
      <View style={styles.postHeader}>
        <View style={styles.userInfo}>
          <Image 
            style={styles.avatar}
            source={userAvatar}
          />
          <View>
            <Text style={styles.userName}>{userName}</Text>
            <Text style={styles.timeAgo}>{timeAgo}</Text>
          </View>
        </View>
        <Icon name="ellipsis-horizontal" size={20} color="#666" />
      </View>
      
      {text.length > 200 ? (
        <>
          <Text numberOfLines={showFullText ? null : 5} style={styles.postText}>
            {text}
          </Text>
          <TouchableOpacity onPress={() => setShowFullText(!showFullText)}>
            <Text style={[styles.postText, {color: '#4169E1', marginTop: 2}]}>
              {showFullText ? 'Скрыть' : 'Показать больше'}
            </Text>
          </TouchableOpacity>
        </>
      ) : (
        <View style={styles.paragraphsContainer}>
        {paragraphs.map((paragraph, index) => (
          <Text key={index} style={styles.postText}>
            {paragraph}
          </Text>
          ))}
        </View>
      )}
      
      {images && (
        <View style={styles.postImages}>
          {images.length > 2 ? (
            <>
              <Image
                style={styles.fullWidthImage}
                source={images[0]}
              />
              <View style={styles.halfImagesContainer}>
                <Image
                  style={styles.halfImage}
                  source={images[1]} 
                />
                <Image
                  style={styles.halfImage}
                  source={images[2]}
                />
              </View>
            </>
          ) : images.length === 2 ? (
            <View style={[styles.halfImagesContainer, {height: 300}]}>
                <Image
                  style={[styles.halfImage, {height: 300}]}
                  source={images[0]} 
                />
                <Image
                  style={[styles.halfImage, {height: 300}]}
                  source={images[1]}
                />
            </View>
          ) : (
            <Image
              style={[styles.fullWidthImage, {height: 300}]}
              source={images[0]}
            />
          )}
        </View>
      )}

      <View style={styles.postFooter}>
        <View style={styles.postActions}>
          <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
            <Icon name={isLiked ? "heart" : "heart-outline"} size={24} color={isLiked ? "#FF0000" : "#666"} />
          </TouchableOpacity>
          <Icon name="chatbubble-outline" size={24} color="#666" />
          <Icon name="share-social-outline" size={24} color="#666" />
        </View>
        <View style={styles.postStats}>
          <Icon name="eye-outline" size={20} color="#666" />
          <Text style={styles.statsText}>{numberOfViews}</Text>
        </View>
      </View>
    </View>
  );
};
const News = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.header}>
        <Text style={styles.title}>Новости</Text>
        <View style={styles.headerIcons}>
          <Icon name="add-circle-outline" size={28} color="#000" />
          <Icon name="notifications-outline" size={28} color="#000" />
        </View>
      </View>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
        <View style={styles.storyItem}>
          <View style={styles.storyAdd}>
            <Image 
              style={styles.storyAvatar}
              source={require('../../assets/avatar1.jpg')}
            />
            <View style={styles.storyAddCircle}>
              <Icon name="add" size={24} color="#fff" />
            </View>
          </View>
        </View>
        
        {stories.map(story => (
          <StoryItem 
            key={story.id}
            username={story.username}
            avatarSource={story.avatarSource}
          />
        ))}
      </ScrollView>
      

      <PostItem 
        userAvatar={require('../../assets/avatar1.jpg')}
        userName="Андрей Иваков"
        timeAgo="2 часа назад"
        text={'🎅 Рязань в новогоднем убранстве\n\nРязань преобразилась к Новому году! Город укутался в сверкающий наряд, создавая неповторимую атмосферу праздника и волшебства.\n\nЦентральные улицы и площади Рязани украшены яркими гирляндами, которые мерцают в темноте, словно звёзды на ночном небе. На площадях возвышаются нарядные ёлки, а рядом с ними расположились фигуры любимых новогодних персонажей — Деда Мороза и Снегурочки.\n\nВ парках и скверах появились ледяные горки и катки, где дети и взрослые могут весело провести время. А в центре города можно увидеть красивые арт-объекты, которые стали настоящими фотозонами для горожан и гостей Рязани.\n\nНовогоднее настроение царит повсюду: в магазинах, кафе и ресторанах. Витрины магазинов украшены праздничными композициями, а в кафе и ресторанах предлагают специальное новогоднее меню.\n\nНиже прилагаю свой любимый маршрут прогулок в зимнее время. Пусть Новый год принесёт в каждый дом счастье, радость и благополучие! #рязань #новыйгод #рождество #праздник'}
        images={[
          require('../../assets/ryazan6.jpg'),
          require('../../assets/newyearroute.jpg')
        ]}
        numberOfViews={6355}
      />

      <PostItem 
        userAvatar={require('../../assets/avatar1.jpg')}
        userName="Андрей Иваков"
        timeAgo="1 день назад"
        text={'🌳 3 крутых места Рязани, которые стоит посетить\n\nРязань — город с богатой историей и культурой. Здесь можно найти множество интересных мест, которые стоит посетить. Вот пять из них:\n\n1. Рязанский кремль. Это одно из самых популярных мест в городе. На территории кремля расположены музеи, выставки и другие интересные объекты. С кремлёвского вала открывается потрясающий вид на город.\n\n2. Соборный парк. Отличное место для прогулок и отдыха. В парке много зелени, цветов и красивых видов. Также здесь можно увидеть несколько интересных достопримечательностей.\n\n3. Музей-усадьба И. П. Павлова. Если вы интересуетесь наукой и медициной, то вам стоит посетить этот музей. Здесь вы сможете узнать больше о жизни и работе выдающегося учёного И. П. Павлова.'}
        images={[
          require('../../assets/ryazan1.png'),
          require('../../assets/ryazan2.jpg'),
          require('../../assets/ryazan3.jpg')
        ]}
        numberOfViews={8748}
      />

      <PostItem 
        userAvatar={require('../../assets/avatar1.jpg')}
        userName="Андрей Иваков"
        timeAgo="1 день назад"
        text={'🌊 Продолжаем обзор красивых мест Рязани\n\n4. Набережная реки Трубеж. Красивое место, где можно прогуляться и насладиться видами на реку. На набережной есть кафе и рестораны, где можно попробовать местные блюда.\n\n5. Художественный музей им. И.П. Пожалостина. Здесь представлены произведения искусства, включая картины, скульптуры и другие экспонаты. Музей является одним из культурных центров города.\n\n Обязательно посетите эти места, чтобы лучше познакомиться с культурой и историей Рязани! \n\n #Путешествуй-с-ITour'}
        images={[
          require('../../assets/ryazan4.jpg'),
          require('../../assets/ryazan5.jpg')
        ]}
        numberOfViews={'10 тыс.'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    paddingHorizontal: 5,
    marginBottom: 70,
  },
  header: {
    alignItems: 'center',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 15,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },

  post: {
    backgroundColor: '#fff',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userName: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#000',
  },
  timeAgo: {
    fontFamily: 'Montserrat-Medium',
    color: '#666',
    fontSize: 12,
  },
  postText: {
    fontFamily: 'Montserrat-Regular',
    color: '#000',
    marginBottom: 10,
    lineHeight: 20,
  },
  postImages: {
    flexDirection: 'column',
    gap: 10,
    marginBottom: 10,
  },
  postImage: {
    flex: 1,
    height: 150,
    borderRadius: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  postStats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  statsText: {
    color: '#666',
  },
  postActions: {
    flexDirection: 'row',
    gap: 15,
  },
  storyAvatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 3,
    borderColor: '#4169E1',
  },
  storiesContainer: {
    overflow: 'hidden',
    paddingTop: 10,
    paddingBottom: 5,
    borderRadius: 15,
    backgroundColor: '#fff',
    shadowColor: '#4169E1',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 10,
  },
  storyItem: {
    alignItems: 'center',
    width: 75,
    marginLeft: 10,
  },
  storyUsername: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    color: '#4169E1',
    textAlign: 'center',
  },
  storyAdd: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 2,
    borderColor: '#4169E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  storyAddCircle: {
    position: 'absolute',
    bottom: -3,
    right: -7,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#4169E1',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidthImage: {
    flex: 1,
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  halfImagesContainer: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  halfImage: {
    flex: 1,
    height: 200,
    borderRadius: 10,
  },
  paragraphsContainer: {
    marginBottom: 10,
    gap: 10,
  },

});

export default News;