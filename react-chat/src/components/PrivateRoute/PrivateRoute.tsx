import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { getUserAuthStatus } from '../../store/userProcess/selectors';
import { AuthorizationStatus } from '../../utils/const';
import Spinner from '../Spinner';

type PrivateRouteProps = {
    requiredStatuses: AuthorizationStatus[];
    redirect: string;
  };
  
export const PrivateRoute = ({ requiredStatuses, redirect }: PrivateRouteProps) => {

  const currentStatus = useAppSelector(getUserAuthStatus);

  const accessAllowed = requiredStatuses.some((element) =>
    currentStatus.includes(element)
  );

  if(currentStatus === AuthorizationStatus.Unknown) return <Spinner/>;
  
  return accessAllowed ? <Outlet /> : <Navigate to={redirect}/> ;
};