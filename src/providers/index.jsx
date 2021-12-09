import { AuthProvider } from "./AuthProvider";
import { SignUpProvider } from "./SignUp";
import { HabitProvider } from "./Habits";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <HabitProvider>{children}</HabitProvider>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default Providers;
