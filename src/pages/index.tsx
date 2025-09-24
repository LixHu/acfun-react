import React from 'react';
import { VideoList } from '../component/video/VideoList';
import { VideoItem, VideoCategory } from '../types/video';

// 模拟视频数据
const mockVideos: VideoItem[] = [
  {
    id: '1',
    title: '【AI】人工智能如何改变我们的生活？深度解析AI技术发展趋势',
    thumbnail: '',
    duration: '15:23',
    viewCount: 123456,
    author: '科技前沿',
    authorAvatar: '',
    publishTime: '2天前'
  },
  {
    id: '2',
    title: '【美食】三分钟学会做正宗川菜麻婆豆腐，简单又好吃',
    thumbnail: '',
    duration: '08:45',
    viewCount: 89765,
    author: '美食达人',
    authorAvatar: '',
    publishTime: '1周前'
  },
  {
    id: '3',
    title: '【游戏】最新3A大作深度评测，值得入手吗？',
    thumbnail: '',
    duration: '23:18',
    viewCount: 234567,
    author: '游戏攻略',
    authorAvatar: '',
    publishTime: '3天前'
  },
  {
    id: '4',
    title: '【旅游】隐藏在中国的十大绝美景点，你去过几个？',
    thumbnail: '',
    duration: '12:57',
    viewCount: 56789,
    author: '旅行日记',
    authorAvatar: '',
    publishTime: '5天前'
  },
  {
    id: '5',
    title: '【学习】高效学习方法分享，让你的学习事半功倍',
    thumbnail: '',
    duration: '18:32',
    viewCount: 198765,
    author: '学霸养成',
    authorAvatar: '',
    publishTime: '1个月前'
  },
  {
    id: '6',
    title: '【音乐】钢琴演奏经典流行歌曲串烧，听到第一首就醉了',
    thumbnail: '',
    duration: '10:45',
    viewCount: 345210,
    author: '钢琴大师',
    authorAvatar: '',
    publishTime: '2周前'
  },
  {
    id: '7',
    title: '【健身】15分钟居家锻炼，零基础也能轻松完成',
    thumbnail: '',
    duration: '15:20',
    viewCount: 87654,
    author: '健身教练',
    authorAvatar: '',
    publishTime: '4天前'
  },
  {
    id: '8',
    title: '【动漫】2023年最值得期待的十大新番，第一居然是它！',
    thumbnail: '',
    duration: '14:12',
    viewCount: 456789,
    author: '动漫资讯',
    authorAvatar: '',
    publishTime: '1天前'
  },
  {
    id: '9',
    title: '【电影】经典电影深度解析，这些细节你注意到了吗？',
    thumbnail: '',
    duration: '21:38',
    viewCount: 123789,
    author: '影评人',
    authorAvatar: '',
    publishTime: '3周前'
  },
  {
    id: '10',
    title: '【编程】零基础学习React，从入门到精通只需七天',
    thumbnail: '',
    duration: '32:15',
    viewCount: 78954,
    author: '编程课堂',
    authorAvatar: '',
    publishTime: '2个月前'
  },
  {
    id: '11',
    title: '【宠物】超萌猫咪日常，看完心情瞬间变好',
    thumbnail: '',
    duration: '05:47',
    viewCount: 567890,
    author: '宠物乐园',
    authorAvatar: '',
    publishTime: '6天前'
  },
  {
    id: '12',
    title: '【汽车】新款电动车全面测评，续航能力惊人',
    thumbnail: '',
    duration: '28:12',
    viewCount: 98765,
    author: '汽车之家',
    authorAvatar: '',
    publishTime: '1周前'
  }
];

// 模拟分类数据
const mockCategories: VideoCategory[] = [
  { id: 'tech', name: '科技' },
  { id: 'food', name: '美食' },
  { id: 'game', name: '游戏' },
  { id: 'travel', name: '旅游' },
  { id: 'study', name: '学习' },
  { id: 'music', name: '音乐' },
  { id: 'fitness', name: '健身' },
  { id: 'anime', name: '动漫' }
];

export default function Home() {
  return (
    <main>
      <VideoList videos={mockVideos} categories={mockCategories} />
    </main>
  );
}
