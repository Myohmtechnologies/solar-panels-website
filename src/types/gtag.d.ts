interface Window {
  gtag: (
    command: 'consent' | 'config' | 'event',
    target: string,
    params?: {
      [key: string]: any;
    }
  ) => void;
  dataLayer: any[];
}
