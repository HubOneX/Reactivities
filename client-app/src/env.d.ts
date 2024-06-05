/// <reference types="vite/client" />

interface ImpertMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_CHAT_URL: string;
}

interface ImportMeta {
  readonly env: ImpertMetaEnv;
}
