import { AuthProvider } from './AuthProvider';
import { HabitProvider } from './Habits';

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <HabitProvider>{children}</HabitProvider>
    </AuthProvider>
  );
};

export default Providers;
