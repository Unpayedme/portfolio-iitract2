import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ModeToggle } from "@/components/common/themetoggle";
export function Header() {
    return (
        <div className="border-b border-gray-700 p-6">
            <div className="container m-auto" >
                <div className="flex justify-around items-center">
                    <h1 className="font-bold">PORTFOLIO</h1>
                    <ul className="flex gap-6">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <Link href="/about">About</Link>
                        </li>
                        <li>
                            <Link href="/projects">Projects</Link>
                        </li>
                        <li>
                            <Link href="/blog">Blogs</Link>
                        </li>
                    </ul>
                    <div className="flex gap-4">
                        <Button>Contact</Button>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </div>
    );
}