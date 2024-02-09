import React, { ErrorInfo, ReactNode } from "react";
import ohno from "./ohno.svg";

interface ErrorBoundaryProps {
  children: ReactNode; // Accept any valid React child
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <>
          <img src={ohno} alt="ohno" />
          <h2>Something went wrong.</h2>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
