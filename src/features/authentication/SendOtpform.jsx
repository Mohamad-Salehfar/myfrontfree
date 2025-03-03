import { useState } from "react";
import TextField from "../../ui/TextField";
import { useMutation } from "@tanstack/react-query";
import { getOtp } from "../../services/authService";
import toast from "react-hot-toast";

function SendOtpform() {
  const [email, setEmail] = useState("");
  const { mutateAsync } = useMutation({
    mutationFn: getOtp,
  });
  const sendOtpHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await mutateAsync({ email });

      toast.success(data);
    } catch (error) {
      console.log(error);

      toast.error(error?.response?.data?.message);
    }
  };
  return (
    <div>
      <form className="space-y-8" onSubmit={sendOtpHandler}>
        <TextField
          label={"ایمیل"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
        />
        <button type="submit" className="btn btn--primary w-full">
          ارسال کد تایید
        </button>
      </form>
    </div>
  );
}

export default SendOtpform;
