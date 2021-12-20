import { AuthProvider } from "./AuthProvider";
import { SignUpProvider } from "./SignUp";
import { HabitProvider } from "./Habits";
import { GroupsProvider } from "./Groups";
import { GoalsProvider } from "./Goals";
import { ActivityProvider } from "./Activities";
import { CurrentPageProvider } from "./CurrentPage";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <HabitProvider>
          <GroupsProvider>
            <GoalsProvider>
              <ActivityProvider>
                <CurrentPageProvider>{children}</CurrentPageProvider>
              </ActivityProvider>
            </GoalsProvider>
          </GroupsProvider>
        </HabitProvider>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default Providers;
