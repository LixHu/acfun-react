// 视频相关类型定义

export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  duration: string;
  viewCount: number;
  author: string;
  authorAvatar: string;
  publishTime: string;
}

export interface VideoCategory {
  id: string;
  name: string;
}