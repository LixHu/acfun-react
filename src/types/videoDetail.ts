// 视频详情相关类型定义

// 视频基础接口
export interface VideoBase {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  viewCount: number;
  author: string;
  authorAvatar: string;
  publishTime: string;
  videoUrl?: string;
}

// 视频详情接口
export interface VideoDetail extends VideoBase {
  description: string;
  likeCount: number;
  dislikeCount: number;
  favoriteCount: number;
  coinCount: number;
  shareCount: number;
  category: string;
  tags: string[];
  authorId: string;
}

// 作者信息接口
export interface Author {
  id: string;
  name: string;
  avatar: string;
  followerCount: number;
  isFollowing: boolean;
}

// 评论接口
export interface Comment {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  content: string;
  likeCount: number;
  publishTime: string;
  replyCount?: number;
  replies?: Comment[];
}

// 视频详情页面数据接口
export interface VideoDetailPageData {
  video: VideoDetail;
  author: Author;
  comments: Comment[];
  recommendVideos: VideoBase[];
}