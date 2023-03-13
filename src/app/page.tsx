import getPostMetaData from '@/components/getPostsMetadata';
import PostPreview from '@/components/PostPreview';
import Link from 'next/link';

function Home() {
  const postsMetaData = getPostMetaData();
  const postPreviews = postsMetaData.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <div className='px-3 grid grid-cols-1 gap-3 md:grid-cols-2'>
      {postPreviews}
    </div>
  );
}

export default Home;
