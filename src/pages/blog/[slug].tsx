import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHtml";

export default function BlogPost({
  post,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, subheader, content, imageLink, imageCaption, unsplashLink } =
    post;

  return (
    <>
      <hgroup>
        <h1>{title}</h1>
        <h2 className="mt-2 text-base font-normal">{subheader}</h2>
      </hgroup>
      <div className="mt-12">
        <Image
          src={imageLink}
          width="1024"
          height="600"
          objectFit="cover"
          objectPosition="bottom"
          alt=""
        />
        <a
          href={unsplashLink}
          className="block mx-auto my-0 text-sm text-center"
        >
          {imageCaption}
        </a>
      </div>
      <div className="mt-16" dangerouslySetInnerHTML={{ __html: content }} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const slug: string = params?.slug ? (params.slug as string) : "";

  const post = getPostBySlug(slug, [
    "title",
    "subheader",
    "createdAt",
    "content",
    "imageLink",
    "imageCaption",
    "unsplashLink",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};
