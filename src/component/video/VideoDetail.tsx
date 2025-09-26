import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../../styles/videoDetail.module.scss';
import { VideoDetail as VideoDetailType, Author, Comment, VideoBase } from '../../types/videoDetail';

interface VideoDetailProps {
  videoId: string;
}

// 模拟数据
const mockVideoDetail: VideoDetailType = {
  id: '1',
  title: '【AI】人工智能如何改变我们的生活？深度解析AI技术发展趋势',
  thumbnail: 'https://picsum.photos/seed/1/1280/720',
  duration: '15:23',
  viewCount: 123456,
  author: '科技前沿',
  authorAvatar: 'https://picsum.photos/seed/author1/200/200',
  publishTime: '2023-06-15',
  description: '随着人工智能技术的快速发展，我们的生活正在发生翻天覆地的变化。\n\n本视频将深入探讨：\n1. AI在日常生活中的应用场景\n2. 人工智能对就业市场的影响\n3. 未来AI技术发展的主要方向\n4. 我们应该如何应对AI时代的挑战\n\n欢迎在评论区分享你的看法！',
  likeCount: 12345,
  dislikeCount: 234,
  favoriteCount: 5678,
  coinCount: 3456,
  shareCount: 789,
  category: '科技',
  tags: ['人工智能', 'AI', '科技', '未来'],
  authorId: 'author1',
  videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4'
};

const mockAuthor: Author = {
  id: 'author1',
  name: '科技前沿',
  avatar: 'https://picsum.photos/seed/author1/200/200',
  followerCount: 123456,
  isFollowing: false
};

const mockComments: Comment[] = [
  {
    id: '1',
    userId: 'user1',
    userName: '技术爱好者',
    userAvatar: 'https://picsum.photos/seed/user1/200/200',
    content: '非常精彩的视频！AI确实正在改变我们的生活方式，期待未来有更多这样高质量的内容。',
    likeCount: 456,
    publishTime: '2023-06-15 14:30',
    replyCount: 23
  },
  {
    id: '2',
    userId: 'user2',
    userName: '学习中',
    userAvatar: 'https://picsum.photos/seed/user2/200/200',
    content: '请问up主对AI伦理问题有什么看法？感觉这是未来需要重点关注的领域。',
    likeCount: 234,
    publishTime: '2023-06-15 15:45'
  },
  {
    id: '3',
    userId: 'user3',
    userName: '未来可期',
    userAvatar: 'https://picsum.photos/seed/user3/200/200',
    content: '作为一个AI领域的从业者，我认为视频中分析的几个方向非常准确。特别是关于AI与人类协作的部分，这是未来发展的关键。',
    likeCount: 567,
    publishTime: '2023-06-15 16:20',
    replyCount: 45
  }
];

const mockRecommendVideos: VideoBase[] = [
  {
    id: '2',
    title: '【AI】一分钟了解机器学习基本原理',
    thumbnail: 'https://picsum.photos/seed/2/400/225',
    duration: '01:30',
    viewCount: 89765,
    author: 'AI入门',
    authorAvatar: 'https://picsum.photos/seed/author2/200/200',
    publishTime: '3天前'
  },
  {
    id: '3',
    title: '【科技】2023年AI领域十大突破',
    thumbnail: 'https://picsum.photos/seed/3/400/225',
    duration: '08:45',
    viewCount: 234567,
    author: '科技早知道',
    authorAvatar: 'https://picsum.photos/seed/author3/200/200',
    publishTime: '1周前'
  },
  {
    id: '4',
    title: '【教程】零基础学习Python+AI',
    thumbnail: 'https://picsum.photos/seed/4/400/225',
    duration: '45:20',
    viewCount: 56789,
    author: '编程学习',
    authorAvatar: 'https://picsum.photos/seed/author4/200/200',
    publishTime: '2周前'
  },
  {
    id: '5',
    title: '【讨论】AI会取代哪些工作？',
    thumbnail: 'https://picsum.photos/seed/5/400/225',
    duration: '12:30',
    viewCount: 198765,
    author: '职场未来',
    authorAvatar: 'https://picsum.photos/seed/author5/200/200',
    publishTime: '1个月前'
  },
  {
    id: '6',
    title: '【演示】用AI工具创作短视频的全过程',
    thumbnail: 'https://picsum.photos/seed/6/400/225',
    duration: '07:45',
    viewCount: 345210,
    author: '内容创作',
    authorAvatar: 'https://picsum.photos/seed/author6/200/200',
    publishTime: '5天前'
  }
];

export const VideoDetailComponent: React.FC<VideoDetailProps> = ({ videoId }) => {
  const router = useRouter();
  const [videoDetail, setVideoDetail] = useState<VideoDetailType | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [recommendVideos, setRecommendVideos] = useState<VideoBase[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 模拟API请求
    const fetchVideoData = async () => {
      // 实际应用中，这里应该是真实的API调用
      // const response = await fetch(`/api/videos/${videoId}`);
      // const data = await response.json();

      // 使用模拟数据
      setTimeout(() => {
        setVideoDetail(mockVideoDetail);
        setAuthor(mockAuthor);
        setComments(mockComments);
        setRecommendVideos(mockRecommendVideos);
        setIsLoading(false);
      }, 500);
    };

    fetchVideoData();
  }, [videoId]);

  // 格式化数字
  const formatNumber = (num: number): string => {
    if (num >= 10000) {
      return `${(num / 10000).toFixed(1)}万`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}千`;
    }
    return num.toString();
  };

  // 处理关注按钮点击
  const handleFollow = () => {
    if (author) {
      setAuthor({
        ...author,
        isFollowing: !author.isFollowing,
        followerCount: author.isFollowing 
          ? author.followerCount - 1 
          : author.followerCount + 1
      });
    }
  };

  // 处理推荐视频点击
  const handleRecommendClick = (id: string) => {
    router.push(`/video/${id}`);
  };

  // 控制视频播放状态
  const [isPlaying, setIsPlaying] = useState(false);

  if (isLoading) {
    return <div className={styles.loading}>加载中...</div>;
  }

  if (!videoDetail || !author) {
    return <div className={styles.loading}>视频不存在或已被删除</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.videoContent}>
        {/* 左侧视频和评论区域 */}
        <div className={styles.playerSection}>
          {/* 视频播放器 */}
          <div className={styles.playerContainer} onClick={() => setIsPlaying(true)}>
            {!isPlaying ? (
              // 显示缩略图和播放按钮
              <>
                <Image 
                  src={videoDetail.thumbnail} 
                  alt={videoDetail.title} 
                  width={1280} 
                  height={720} 
                  layout="responsive"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.playButtonContainer}>
                  <div className={styles.playButton}>▶</div>
                </div>
              </>
            ) : (
              // 显示视频播放器
              <video 
                src={videoDetail.videoUrl} 
                controls 
                autoPlay
                className={styles.videoPlayer}
              >
                您的浏览器不支持HTML5视频播放。
              </video>
            )}
          </div>

          {/* 视频信息 */}
          <div className={styles.videoInfo}>
            <h1 className={styles.videoTitle}>{videoDetail.title}</h1>
            <div className={styles.videoStats}>
              <span className={styles.viewCount}>{formatNumber(videoDetail.viewCount)}</span>
              <span className={styles.publishTime}>{new Date(videoDetail.publishTime).toLocaleDateString()}</span>
            </div>
          </div>

          {/* 作者信息 */}
          <div className={styles.authorSection}>
            <div className={styles.authorInfo}>
              <div className={styles.authorAvatar}>
                  <Image 
                    src={author.avatar} 
                    alt={author.name}
                    width={50}
                    height={50}
                    style={{ objectFit: 'cover', borderRadius: '50%' }}
                  />
                </div>
              <div className={styles.authorDetails}>
                <h3>{author.name}</h3>
                <div className={styles.followerCount}>粉丝 {formatNumber(author.followerCount)}</div>
              </div>
            </div>
            <button 
              className={styles.followButton}
              onClick={handleFollow}
            >
              {author.isFollowing ? '已关注' : '+ 关注'}
            </button>
          </div>

          {/* 视频描述 */}
          <div className={styles.descriptionSection}>
            <div className={styles.description}>{videoDetail.description}</div>
          </div>

          {/* 评论区 */}
          <div className={styles.commentsSection}>
            <div className={styles.commentsHeader}>
              <span className={styles.commentCount}>评论 {comments.length}</span>
              <button className={styles.sortButton}>
                最新 <span>▼</span>
              </button>
            </div>
            
            {/* 评论列表 */}
            {comments.map(comment => (
              <div key={comment.id} className={styles.commentItem}>
                <div className={styles.commentHeader}>
                  <div className={styles.commentAvatar}>
                      <Image 
                        src={comment.userAvatar} 
                        alt={comment.userName}
                        width={36}
                        height={36}
                        style={{ objectFit: 'cover', borderRadius: '50%' }}
                      />
                    </div>
                  <div className={styles.commentUser}>{comment.userName}</div>
                  <div className={styles.commentTime}>{comment.publishTime}</div>
                </div>
                <div className={styles.commentContent}>{comment.content}</div>
                <div className={styles.commentActions}>
                  <div className={styles.commentAction}>👍 {formatNumber(comment.likeCount)}</div>
                  <div className={styles.commentAction}>💬 回复</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 右侧推荐视频区域 */}
        <div className={styles.recommendSection}>
          {recommendVideos.map(video => (
            <div 
              key={video.id} 
              className={styles.recommendItem}
              onClick={() => handleRecommendClick(video.id)}
            >
              <div className={styles.recommendThumbnail}>
                <Image 
                  src={video.thumbnail} 
                  alt={video.title}
                  width={200}
                  height={112}
                  layout="responsive"
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.videoDuration}>{video.duration}</div>
              </div>
              <div className={styles.recommendInfo}>
                <div className={styles.recommendTitle}>{video.title}</div>
                <div className={styles.recommendMeta}>
                  <div>{video.author}</div>
                  <div>{formatNumber(video.viewCount)} 次观看</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};