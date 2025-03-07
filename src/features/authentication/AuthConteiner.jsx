import { useState } from "react";
import SendOtpform from "./SendOtpform";
import CheckOtpForm from "./CheckOtpForm";

function AuthConteiner() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const randerStep = () => {
    switch (step) {
      case 1:
        return (
          <SendOtpform
            setStep={setStep}
            email={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        );
      case 2:
        return <CheckOtpForm email={email} />;
      default:
        return null;
    }
  };
  return <div className="w-full sm:max-w-sm">{randerStep()}</div>;
}

export default AuthConteiner;
