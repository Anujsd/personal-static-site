import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';
import getPostMetaData from '@/components/getPostsMetadata';
import path from 'path';

const getPostContent = (slug: string) => {
  const folder = path.join(process.cwd(), 'posts');
  const file = path.join(`${folder}`, `${slug}.md`);
  const content = fs.readFileSync(file, 'utf-8');
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const posts = getPostMetaData();
  return posts.map((post) => {
    slug: post.slug;
  });
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <div>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>{post.data.title}</h1>
        <p className='text-slate-400 text-sm'>{post.data.date}</p>
      </div>
      <article className='prose lg:prose-xl p-5'>
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
