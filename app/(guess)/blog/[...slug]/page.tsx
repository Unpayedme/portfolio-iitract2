import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  // Request API using slug
  // const responses = await fetch(`/api/blog/${slug}`);

  const data = await fetch("https://randomuser.me/api/")
  .then(res => res.json).then(data => console.log(data));
  
 
  // As if Response Data from the BE
  const response = [
    {
      id: "my-first-blog",
      title: "My First Blog",
      content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      author: "Sefuesca",
      publishedDate: "January 31, 2026",
      commentsData: [
        "Hello",
        "Great Article!",
        "Keep going!"
      ]
    }
  ];

  // Check 2nd level Slug if it's comments
  if (slug[1] === "comments") {
    
    return (
      <div className="container mx-auto px-6 pt-10">
        <Link href="./" className="flex items-center mb-5">
          <ArrowLeft />
          <span className="text-lg">Back</span>
        </Link>
        <h2 className="text-2xl">Blog Comments</h2>
        <ul className="mt-4 space-y-3">
          {response[0].commentsData.map((comment) => (
            <li key={comment} className="border p-4 bg-gray-100 rounded-md">{comment}</li>
          ))}
        </ul>
      </div>
    )
  }

  // Validate if blog is available
  if (response[0].id !== slug[0]) {
    return (
      <div className="flex justify-center py-20">
        <h2 className="font-bold text-2xl text-gray-500">Not Found Blog</h2>
      </div>
    )
  }

  // Display actual blog
  return (
    <article className="container mx-auto px-6 space-y-4 pt-20">
      <h1 className="font-bold text-2xl">{response[0].title}</h1>
      <p>{response[0].content}</p>
      <div>
        <p>Author: {response[0].author}</p>
        <p>Published Date: {response[0].publishedDate}</p>
      </div>

      <Link href={`./${response[0].id}/comments`}>
        <Button>View Comments</Button>
      </Link>
    </article>
  )
}