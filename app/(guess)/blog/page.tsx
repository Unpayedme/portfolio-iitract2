import { Button } from "@/components/ui/button";
import Link from "next/link";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blob";

export default function Blog() {
  return (
    <div className="container m-auto py-6 px-6">
      <h1 className="text-3xl font-bold">Blog</h1>

      <div className="my-6 inline-block items-center md:flex md:gap-2">
        <Link href="/blog">
          <Button variant="outline" className="inline-block mt-1 mr-1">All Posts</Button>
        </Link>


        {
          BLOG_CATEGORIES.map((category,index) => (
            <Link key={index} href={`blog/category/${category.slug}`} className="inline-block mt-1 mr-1">
                <Button variant="outline">{category.name}</Button>
            </Link>
          ))
        }
      </div>

      <div className="flex flex-col gap-4 ">
        {BLOG_POSTS.map(category => (
          <Link key={category.id} href={`blog/${category.slug}`}>
            <div className="border rounded-lg hover:bg-muted/50 p-4 gap-4">
              <h1 className="font-bold">{category.title}</h1>
              <p className="text-muted-foreground">{category.overview}</p>
              <p className="text-muted-foreground">{category.date} • {category.author}</p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}