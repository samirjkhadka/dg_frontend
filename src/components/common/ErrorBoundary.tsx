import { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center section-dark">
          <div className="max-w-md w-full p-8 card-glass rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-red-400 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-gray-300 mb-4">
              We apologize for the inconvenience. Please try refreshing the page or
              contact support if the problem persists.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-lg hover:from-primary/90 hover:to-blue-600/90 transition-all duration-300 transform hover:scale-105"
            >
              Refresh Page
            </button>
            {process.env.NODE_ENV === 'development' && (
              <pre className="mt-4 p-4 bg-slate-800/50 rounded text-sm overflow-auto text-gray-300 backdrop-blur-sm border border-slate-600/30">
                {this.state.error?.toString()}
              </pre>
            )}
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary; 