import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button"
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blob";
import { notFound } from "next/navigation";
// function filterCategory(data: string)
// {
//     console.log(data);
//     return BLOG_POSTS.filter(postData => postData.category.includes(data));
// }

export default async function Category({ params }: { params: Promise<{ category: string[] }> }) {
    const { category } = await params;
    const segment1 = category[0];
    console.log("data", category);

    if(!category){
        notFound();
    }

    const filtedPost = BLOG_POSTS.filter(postData => postData.category.includes(segment1));
    console.log(filtedPost)

    const [ filtedCategory ] = BLOG_CATEGORIES.filter(catData => catData.slug === segment1)
    console.log(filtedCategory);

    return (
        <div className="container m-auto mt-4">
            <div className="text-muted-foreground mb-2">
                <Link href="/blog" className="inline-flex hover:underline">
                    <ArrowLeft className="w-5" /> Back to Blog
                </Link>
            </div>
            <h1 className="font-bold text-4xl">Category: {filtedCategory ? filtedCategory.name : ""}</h1>
            <p className="text-muted-foreground">{filtedPost.length !== 0 ? filtedPost.length : ""}  post in this category</p>
            <div className="my-6 flex gap-2">
                <Link href="/blog">
                    <Button variant="outline">All Posts</Button>
                </Link>

                {
                    BLOG_CATEGORIES.map((category,index) => (
                        <Link key={index} href={`/blog/category/${category.slug}`}>
                            <Button variant="outline">{category.name}</Button>
                        </Link>
                    ))
                }
            </div>
            <div className="flex flex-col gap-4">
                {filtedPost.map(category => (
                    <Link key={category.id} href={`/blog/${category.slug}`}>
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