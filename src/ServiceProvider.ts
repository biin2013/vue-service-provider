import type { App } from 'vue';
import type { ServiceProviderInterface } from './ServiceProviderInterface';

export class ServiceProvider implements ServiceProviderInterface {
  locales(): any {
    return {};
  }

  routers(): any {
    return [];
  }

  views(): any {
    return {};
  }

  boot(app:App): void {
    // custom
  }
}