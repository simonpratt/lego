import { createContext } from 'react';

export interface FileContextProps {
  upload: (file: File) => Promise<string>;
  getUrl: (key: string) => string;
}

const FileContext = createContext<FileContextProps>({
  // eslint-disable-next-line
  upload: (file: File) => {
    throw new Error('ERROR: Upload function must be bound in a context');
  },
  // eslint-disable-next-line
  getUrl: (key: string) => {
    throw new Error('ERROR: Get URL function must be bound in a context');
  },
});

export default FileContext;
