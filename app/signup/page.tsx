import SignupForm from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="w-5/6 my-16 mx-auto bg-slate-300/30 backdrop-blur-sm rounded-lg md:w-1/2 lg:w-2/5">
      <div className="py-8 px-4">
        <h1 className="text-center text-4xl font-bold">Signup</h1>
        <SignupForm/>
      </div>
    </div>
  )
}
