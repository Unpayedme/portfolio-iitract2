import Link from "next/link";
import { ModeToggle } from "@/components/common/themetoggle";
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from 'lucide-react';

export function Header() {
    return (
        <div className="border-b border-gray-700 p-6 text-xs sm:text-md md:text-lg lg:text-xl sticky top-0 bg-white z-50">
            <div className="container m-auto">
                <div className="flex justify-around items-center">
                    <h1 className="font-bold text-xl md:text-2xl"><Link href="/" className="hover:underline">PORTFOLIO</Link></h1>
                    <ul className="hidden md:flex gap-6">
                        <li>
                            <Link href="/" className="hover:underline">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:underline">About</Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:underline">Projects</Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:underline">Blogs</Link>
                        </li>
                    </ul>
                    <div className="flex gap-1 md:gap-4">
                        <Button>Contact</Button>
                        <ModeToggle />
                    </div>
                    <div className="md:hidden">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <ChevronDown className=""/>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel><Link href="/" className="hover:underline">Home</Link></DropdownMenuLabel>
                                    <DropdownMenuItem><Link href="/about" className="hover:underline">About</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link href="/projects" className="hover:underline">Projects</Link></DropdownMenuItem>
                                    <DropdownMenuItem><Link href="/blog" className="hover:underline">Blogs</Link></DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    );
}