import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getUserAuthStatus } from '../../store/userProcess/selectors';
import { AuthorizationStatus } from '../../utils/const';

type PrivateRouteProps = {
    requiredStatuses: AuthorizationStatus[];
    redirect: string;
  };
  
export const PrivateRoute = ({ requiredStatuses, redirect }: PrivateRouteProps) => {

  const currentStatus = useAppSelector(getUserAuthStatus);

  const accessAllowed = requiredStatuses.some((element) =>
    currentStatus.includes(element)
  );
  
  return accessAllowed ? <Outlet /> : <Navigate to={redirect} />;
};