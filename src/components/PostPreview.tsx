import Link from 'next/link';
import { postMetadata } from './postMetadata';

const PostPreview = (props: postMetadata) => {
  return (
    <div className='border border-slate-300 p-5 rounded shadow-md bg-white'>
      <Link href={`/blogs/${props.slug}`}>
        <h2 className='font-bold text-violet-800 hover:underline text-xl'>
          {props.title}
        </h2>
      </Link>
      <p className='text-sm text-slate-500'>{props.date}</p>
      <p className='text-slate-700'>{props.subtitle}</p>
    </div>
  );
};

export default PostPreview;
