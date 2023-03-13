import { postMetadata } from './postMetadata';
import fs from 'fs';
import matter from 'gray-matter';

const getPostMetaData = (): postMetadata[] => {
  const folder = 'posts/';
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith('.md'));

  const posts = markdownFiles.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace('.md', ''),
    };
  });
  console.log(__dirname);
  return posts;
};

export default getPostMetaData;
