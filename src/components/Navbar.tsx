import { Link } from "react-router-dom";
import { Button, Mode } from "../UI";
import reactImage from "/react-1.svg";
export default function Navbar() {
    return (
        <>
            <div className="flex justify-between items-center">
                <img src={reactImage} alt="Logo" className="w-10 h-10 rounded-full"  />
                <div className="flex space-x-4 items-center">
                <Link to="/sign-in"><Button type="link">Sign-In</Button></Link>
                <Mode />

                </div>
            </div>
        </>
    )
}