import { useRouter } from 'next/router';
import { VideoDetailComponent } from '../../component/video/VideoDetail';

export default function VideoDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  // 如果id不存在，显示加载状态或返回首页
  if (!id) {
    return <div>加载中...</div>;
  }

  return <VideoDetailComponent videoId={id as string} />;
}

// 静态属性，供父组件获取页面标题
VideoDetailPage.pageTitle = '视频详情页';