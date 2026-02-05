import Link from "next/link";

export function Footer(){
    return (
        <div className="border-t border-gray-700 p-6">
            <div className="container m-auto flex justify-around">
                <div>
                    <ul>
                        <li>My Portfolio</li>
                        <li>Cebu, City</li>
                    </ul>
                </div>
                 <div>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/projects">Projects</Link></li>
                    </ul>
                </div>
                 <div>
                    <ul>
                        <li><Link href="/">Blog 1</Link></li>
                        <li><Link href="/about">Blog 2</Link></li>
                        <li><Link href="/projects">Blog 3</Link></li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <li>Email: test@gmail.com</li>
                        <li>Phone: 123 123 123</li>
                        <li>Github</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}   