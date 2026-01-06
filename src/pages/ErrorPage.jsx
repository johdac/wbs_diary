import { isRouteErrorResponse } from 'react-router';
import { useRouteError } from 'react-router';

export const ErrorPage = () => {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <>
        <div>An error occured</div>
        <div>
          {error.status} {error.message}
        </div>
      </>
    );
  }
};
