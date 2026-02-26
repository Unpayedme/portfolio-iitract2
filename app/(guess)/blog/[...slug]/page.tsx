import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blob";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const [slug1] = slug;
  //console.log(slug1);

  const currentSlug = BLOG_POSTS.find((slug) => slug.slug === slug1)
  //console.log(currentSlug?.slug);


  if (!currentSlug || currentSlug == null) {
    notFound();
  }

  return (
    <div className="container m-auto my-10 p-4">
      <div className="text-muted-foreground mb-2 text-sm md:text-lg">
        <Link href="/blog" className="inline-flex hover:underline justify-center items-center">
          <ArrowLeft className="w-5 justify-center items-center" />Back to Blog
        </Link>
      </div>
      <div>
        <h1 className="text-4xl font-bold">{currentSlug.title}</h1>
      </div>
      <div className="text-muted-foreground mb-4 mt-2 text-xs md:text-lg" >
        {currentSlug.date} • {currentSlug.author} • {currentSlug.category.join(" - ")}
      </div>
      <div>
        {currentSlug.content}
      </div>
    </div>
  )
}