import CheckOtp from "../features/authentication/CheckOtp";
import SendOtpform from "../features/authentication/SendOtpform";

function Auth() {
  return (
    <div className="flex justify-center pt-10">
      <div className="w-full sm:max-w-sm">
        <SendOtpform />
        {/* <CheckOtp /> */}
      </div>
    </div>
  );
}

export default Auth;
