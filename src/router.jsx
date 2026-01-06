import { createBrowserRouter } from 'react-router';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { AppLayout } from './components/layout/AppLayout';
import { ImprintPage } from './pages/ImprintPage';
import { EntryPage } from './pages/EntryPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: AppLayout,
    ErrorBoundary: ErrorPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: 'imprint',
        Component: ImprintPage,
      },
      {
        path: ':id',
        loader: ({ params }) => {
          const data = JSON.parse(localStorage.getItem('data'));
          const entry = data.entries.find((entry) => entry.id === params.id);
          if (!entry) {
            console.log('Page not found');
            throw new Response('Entry not found', { status: 400 });
          }
          return entry;
        },
        Component: EntryPage,
      },
    ],
  },
]);

// This would be the way we learned

// export const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         path: '/',
//         element: <Homepage />,
//       },
//       {
//         path: '/imprint',
//         element: <Imprint />,
//       },
//       {
//         path: '/:id',
//         element: <Entry />,
//       },
//     ],
//   },
// ]);
