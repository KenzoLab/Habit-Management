import { AuthProvider } from './AuthProvider';
import { HabitProvider } from './Habits';
import { GroupsProvider } from './Groups';
import { SignUpProvider } from './SignUp';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <SignUpProvider>
        <HabitProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </HabitProvider>
      </SignUpProvider>
    </AuthProvider>
  );
};

export default Providers;
