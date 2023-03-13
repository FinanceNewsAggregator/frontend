import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

export function createRouter() {
    const RootPageLazy = React.lazy(() => import('./RootPage'));
    const LandingPageLazy = React.lazy(() => import('./Views/LandingPage/LandingPage'));
    const TagsPageLazy = React.lazy(() => import('./Views/TagsPage/TagsPage'));
    const SourcesPageLazy = React.lazy(() => import('./Views/SourcesPage/SourcesPage'));
    const SignUpPageLazy = React.lazy(() => import('./Views/SignUpPage/SignUpPage'));
    const router = createBrowserRouter([
        {
            path: "/",
            element: <RootPageLazy />,
            // errorElement: <ErrorPage />,
            // loader: () => React.,
            // action: rootAction,
            children: [
                {
                    path: "",
                    element: <Navigate to="home" />
                },
                {
                    path: "home",
                    element: <LandingPageLazy />
                },
                {
                    path: "tags",
                    element: <TagsPageLazy />
                },
                {
                    path: "sources",
                    element: <SourcesPageLazy />
                },
                {
                    path: "register",
                    element: <SignUpPageLazy />
                },
            ]
        }
    ]);
    return router;
}