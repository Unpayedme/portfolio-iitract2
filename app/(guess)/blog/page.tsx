import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Blog() {  
  return (
    <div className="container m-auto p-6">
      <h1>Blog Page</h1>
      <p>This is the Blog page.</p>
      <div className="mt-4">
        <Link href="./blog/my-first-blog">
          <Button>
            Visit My First Blog!
          </Button>
        </Link>
        
      </div>
    </div>
  );
}