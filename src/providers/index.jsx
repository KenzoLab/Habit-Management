import { AuthProvider } from "./AuthProvider";
import { SignUpProvider } from "./SignUp";
import { HabitProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivityProvider } from "./Activities";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <HabitProvider>
          <GroupsProvider>
            <GoalsProvider>
              <ActivityProvider>{children}</ActivityProvider>
            </GoalsProvider>
          </GroupsProvider>
        </HabitProvider>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default Providers;
