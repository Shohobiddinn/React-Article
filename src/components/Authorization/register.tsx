import { useDispatch } from "react-redux";
import { Button } from "../../UI";
import { loginType } from "../../slice/authSlice";

export default function Register() {
    const dispatch = useDispatch();
    function login() {
        dispatch(loginType());
    }
    return (
        <>
            <div className="min-h-screen  flex items-center justify-center p-4">
                <div className="max-w-md w-full rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-white mb-6 text-center">Register</h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="your name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="your@email.com"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                        <div className="flex items-center justify-between">

                        </div>

                        <Button>
                            Submit
                        </Button>
                    </form>

                    <div className="mt-6 flex items-center gap-3  text-sm text-gray-600">
                        Do you have an account?
                        <button onClick={login} type="button" className="text-indigo-600 hover:text-indigo-500 font-medium">Sign in</button>
                    </div>
                </div>
            </div>
        </>
    )
}