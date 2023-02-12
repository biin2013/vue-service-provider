import type { App } from 'vue';

export declare interface ServiceProviderInterface {
  locales(): any;
  routers(): any;
  views(): any;
  boot(app: App): void;
};