import { createClient } from './client';

/**
 * Gets the sitemap.
 */
export const getSitemap = async () => {
  const client = createClient();

  const [blogPosts, landingPages] = await Promise.all([
    client.getAllByType('blog_post'),
    client.getAllByType('page'),
  ]);

  return {
    blogPosts: blogPosts.map((post) => ({
      href: post.url,
      title: post.data.title,
    })),
    landingPages: landingPages.map((page) => ({
      href: page.url,
      title: page.data.title,
    })),
    homepage: {
      href: '/',
      title: 'Home',
    },
  };
};
