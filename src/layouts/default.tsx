
import { Navbar } from '../components';
export default function DefaultLayout({ children }: any) {
    return (
        <>
            <Navbar />
            {children}
        </>
    )
}