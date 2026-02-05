import { Button } from "@/components/ui/button";

export function Header(){
    return(
        <div className="border container m-auto"> 
            <h1>PORTFOLIO</h1>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Blogs</li>
            </ul>
            <div>
                <Button />
            </div>
        </div>
    );
}