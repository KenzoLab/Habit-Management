import { AuthProvider } from './AuthProvider';
import { HabitProvider } from './Habits';
import { GroupsProvider } from './Groups';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitProvider>
        <GroupsProvider>{children}</GroupsProvider>
      </HabitProvider>
    </AuthProvider>
  );
};

export default Providers;
