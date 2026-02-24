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
    <div className="container m-auto my-10">
      <div className="text-muted-foreground mb-2">
        <Link href="/blog" className="inline-flex hover:underline">
          <ArrowLeft className="w-5" /> Back to Blog
        </Link>
      </div>
      <div>
        <h1 className="text-4xl font-bold">{currentSlug.title}</h1>
      </div>
      <div className="text-muted-foreground mb-4 mt-2" >
        {currentSlug.date} • {currentSlug.author} • {currentSlug.category.join(" - ")}
      </div>
      <div>
        {currentSlug.content}
      </div>
    </div>
  )
}