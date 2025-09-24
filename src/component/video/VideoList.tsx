import React, { useState } from 'react';
import { VideoItem, VideoCategory } from '../../types/video';
import styles from '../../styles/home.module.scss';
import Image from 'next/image';

interface VideoListProps {
  videos: VideoItem[];
  categories: VideoCategory[];
}

export const VideoList: React.FC<VideoListProps> = ({ videos, categories }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 过滤视频列表
  const filteredVideos = videos.filter(video => {
    // 按分类过滤
    const categoryMatch = activeCategory === 'all' || true; // 简化处理，实际应用中应该有category字段
    // 按搜索词过滤
    const searchMatch = searchQuery === '' || 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.author.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  // 格式化观看次数
  const formatViewCount = (count: number): string => {
    if (count >= 10000) {
      return `${(count / 10000).toFixed(1)}万`;
    }
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}千`;
    }
    return count.toString();
  };

  return (
    <div className={styles.container}>
      {/* 分类导航 */}
      <nav className={styles.nav}>
        <div className={styles.navLinks}>
          <div 
            className={`${styles.navLink} ${activeCategory === 'all' ? styles.active : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            推荐
          </div>
          {categories.map(category => (
            <div 
              key={category.id}
              className={`${styles.navLink} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </div>
          ))}
        </div>
        
        {/* 搜索栏 */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="搜索视频、用户"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className={styles.searchButton}>搜索</button>
        </div>
      </nav>

      {/* 视频网格 */}
      <div className={styles.videoGrid}>
        {filteredVideos.map(video => (
          <div key={video.id} className={styles.videoCard}>
            <div className={styles.videoThumbnail}>
              {/* 使用静态图片替代真实视频缩略图 */}
              <Image 
                src={`https://picsum.photos/seed/${video.id}/400/225`} 
                alt={video.title}
                width={400}
                height={225}
                sizes="100%"
                style={{ objectFit: 'cover' }}
              />
              <div className={styles.videoDuration}>{video.duration}</div>
            </div>
            <div className={styles.videoInfo}>
              <h3 className={styles.videoTitle}>{video.title}</h3>
              <div className={styles.videoMeta}>
                <span className={styles.videoAuthor}>{video.author}</span>
                <span>{formatViewCount(video.viewCount)}次观看</span>
                <span>{video.publishTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};