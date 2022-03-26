import { BsStars } from 'react-icons/bs'
import TweetBox from './TweetBox'
import Post from './Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d] overflow-y-scroll`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}
const tweets = [
  {
    displayName: 'Vaibhav',
    userName: 'walletAddress',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I7KMvIwGZsLK60PUlUmZ6rWPUuLYzoDQlp9wPXy2A=s32-c-mo',
    text: 'tweet 1',
    isProfileImageNFT: false,
    timestamp: '2020-01-01T00:00:00.000Z',
  },
  {
    displayName: 'Vaibhav',
    userName: 'walletAddress',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I7KMvIwGZsLK60PUlUmZ6rWPUuLYzoDQlp9wPXy2A=s32-c-mo',
    text: 'tweet 1',
    isProfileImageNFT: false,
    timestamp: '2020-05-01T12:00:00.000Z',
  },
  {
    displayName: 'Vaibhav',
    userName: 'walletAddress',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I7KMvIwGZsLK60PUlUmZ6rWPUuLYzoDQlp9wPXy2A=s32-c-mo',
    text: 'tweet 1',
    isProfileImageNFT: false,
    timestamp: '2020-05-01T12:00:00.000Z',
  },
  {
    displayName: 'Vaibhav',
    userName: 'walletAddress',
    avatar:
      'https://lh3.googleusercontent.com/ogw/ADea4I7KMvIwGZsLK60PUlUmZ6rWPUuLYzoDQlp9wPXy2A=s32-c-mo',
    text: 'tweet 1',
    isProfileImageNFT: true,
    timestamp: '2022-03-26T12:00:00.000Z',
  },
]

export default function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets &&
        tweets.map((t, i) => (
          <Post
            key={i}
            displayName={t.displayName}
            userName={`${t.userName.slice(0, 4)}...${t.userName.slice(-4)}`}
            avatar={t.avatar}
            text={t.text}
            isProfileImageNFT={t.isProfileImageNFT}
            timestamp={t.timestamp}
          />
        ))}
    </div>
  )
}
