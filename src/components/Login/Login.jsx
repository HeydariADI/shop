import Textfeild from "../Textfield/Textfeild";

function Login() {
  return (
    <form className="w-80 h-80 ">
      <h2 className="border-b-2 border-green-800 mb-4 p-4 font-bold ">Login</h2>
      <div className="flex flex-col justify-center items-center gap-5 mt-8">
        <Textfeild />
        <Textfeild />
        <button className="btn">Login</button>
      </div>
    </form>
  );
}

export default Login;
