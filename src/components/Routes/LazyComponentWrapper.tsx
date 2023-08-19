import { ComponentType, Suspense, lazy } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LazyComponentType = ComponentType<any> & { preload: () => void };

const LazyComponentWrapper = (
  lazyComponent: () => Promise<{ default: LazyComponentType }>,
) => {
  const LazyComponent = lazy(lazyComponent);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return (props: any) => (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default LazyComponentWrapper;
