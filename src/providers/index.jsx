import { AuthProvider } from "./AuthProvider";
import { SignUpProvider } from "./SignUp";
import { HabitProvider } from "./Habits";

import { GoalsProvider } from "./Goals";
import { ActivityProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <HabitProvider>
          <GoalsProvider>
            <ActivityProvider>{children}</ActivityProvider>
          </GoalsProvider>
        </HabitProvider>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default Providers;
