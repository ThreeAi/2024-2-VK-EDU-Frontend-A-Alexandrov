import {
  useState,
  useEffect,
  useRef,
  useCallback,
  MutableRefObject,
} from 'react';

const listenerCallbacks = new WeakMap();

const handleIntersections = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry) => {
    if (!listenerCallbacks.has(entry.target)) {
      return;
    }

    const callback = listenerCallbacks.get(entry.target);

    if (!entry.isIntersecting) {
      return;
    }

    observer.unobserve(entry.target);
    listenerCallbacks.delete(entry.target);
    callback();
  });
};

const observer = new IntersectionObserver(handleIntersections, {
  threshold: 0.15,
});

const useIntersection = (
  ref: MutableRefObject<HTMLDivElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    if (ref.current) {
      listenerCallbacks.set(ref.current, callback);
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        listenerCallbacks.delete(ref.current);
        observer.unobserve(ref.current);
      }
    };
  }, [callback]);
};

type ImageProps = {
  src: string;
};

const Image = ({ src }: ImageProps) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const callback = useCallback(() => {
    setIsInView(true);
  }, [setIsInView]);

  useIntersection(ref, callback);

  return (
    <div 
      ref={ref}
      style={{
        width: '100%',
        height:  `${isInView ? 'auto' : '500px'}`
      }}>
      {isInView && <img src={src} alt="attachment" className="message-image" />}
    </div>
  );
};

export default Image;
