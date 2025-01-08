import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, GithubAuthProvider } from "firebase/auth";
import app from '../../../firebase/firebase.config'
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const auth = getAuth(app)
    const loginWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const SignInUser = result.user;
                setUser(SignInUser)
                console.log(SignInUser)
            })
            .catch(err => {
                console.log(err.message)
            })
    }
  
    const loginWithGithub = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const githubUser = result.user;
                setUser(githubUser)
                console.log(githubUser)
            })
            .catch(err => {
                console.log(err.message)
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null)
                console.log('sign out successfully')
            })
            .catch(err => {
                console.log(err.message)
            })
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    {
                        user && <div>
                            <p className="py-6">
                                username: {user.displayName}
                            </p>
                            <p>Email: {user.email}</p>
                            <img src={user.photoURL} alt="picture" />

                        </div>
                    }
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>

                        </div>
                    </form>
                    {
                        user ? <button className="btn btn-primary mt-10 px-20" onClick={logOut}>Logout</button> :
                            <div>
                                <button className="btn btn-primary mt-10 px-20" onClick={loginWithGoogle}>Login with Google</button>
                                <button className="btn btn-primary mt-10 px-20" onClick={loginWithGithub}>Login with Github</button>
                            </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default Login;