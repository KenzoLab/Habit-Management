import { AuthProvider } from "./AuthProvider";
import { SignUpProvider } from "./SignUp";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SignUpProvider>{children}</SignUpProvider>
    </AuthProvider>
  );
};

export default Providers;
