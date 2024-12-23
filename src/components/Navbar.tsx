import { Mode } from "../UI";
import reactImage from "/react-1.svg";
export default function Navbar() {
    return (
        <>
            <div className="flex justify-between">
                <img src={reactImage} alt="Logo" className="w-10 h-10 rounded-full"  />
                <Mode />
            </div>
        </>
    )
}