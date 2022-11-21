import Link from 'next/link'
import Image from 'next/image'
import BLOG from '@/blog.config'
import formatDate from '@/lib/formatDate'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const BlogPost = ({ post }) => {
  const { locale } = useRouter()
  return (
    <motion.div>
      <Link passHref href={`${BLOG.path}/${post.slug}`} scroll={false}>
        <article
          key={post.id}
          className='group flex flex-col overflow-hidden relative mb-5 md:mb-8 cursor-pointer rounded-lg p-5'
        >
          <Image
            className='w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200'
            src={post?.page_cover}
            alt={`${post.title}`}
            layout='fill'
          />
          <div className='hidden md:block md-cover absolute inset-0'></div>
          <div className='md:hidden sm-cover absolute inset-0'></div>
          <div className='relative mt-auto'>
            <header className='flex flex-col justify-between md:flex-row md:items-baseline'>
              <h2 className='text-lg md:text-xl font-medium mb-2 text-black dark:text-gray-100'>{post.title}</h2>
              <span className='text-color-fix font-light flex-shrink-0 text-gray-600 dark:text-gray-400'>
                {formatDate(post?.date?.start_date || post.createdTime, locale)}
              </span>
            </header>
            <p className='font-light hidden md:block leading-8 text-gray-700 dark:text-gray-300'>{post.summary}</p>
            {/* w-4/5  */}
            <span className='text-'></span>
            <div class="mr-2 mb-2 inline-flex items-center px-5 py-2.5">
              <svg xmlns="http://www.w3.org/2000/svg" class="vw-6 mr-2 -ml-1 h-6 dark:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="{1.5}" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span class="waline-comment-count bg-gradient-to-r from-sky-400 to-emerald-600 bg-clip-text font-mono text-xl text-transparent">666</span>
           </div>
          </div>
        </article>
      </Link>
    </motion.div>
  )
}

export default BlogPost
