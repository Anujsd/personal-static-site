import Link from 'next/link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className='text-center bg-violet-900 p-10 rounded mb-5'>
        <Link href='/'>
          <h1 className='text-4xl text-white font-bold hover:underline'>
            Anuj's Site
          </h1>
        </Link>
        <p className='text-blue-50'>Welcome to my site</p>
      </div>
    </header>
  );
  const footer = (
    <footer>
      <div className='border-t border-violet-900 my-5 py-2 text-center text-violet-900'>
        <h3>Created using nextjs and tailwindcss.</h3>
      </div>
    </footer>
  );
  return (
    <html lang='en'>
      <head>
        <title>Anuj's Site</title>
      </head>
      <body>
        <div className='mx-auto max-w-5xl p-2'>
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
