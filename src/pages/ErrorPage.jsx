import { isRouteErrorResponse, useRouteError } from 'react-router';
import { AppLayout } from '../components/layout/AppLayout';

export const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <AppLayout>
          <div>An error occured</div>
          <div>
            {error.status} {error.message}
          </div>
        </AppLayout>
      </>
    );
  }
};
