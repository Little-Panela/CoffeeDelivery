import { HttpModuleOptions } from '@nestjs/axios';
import { ThrottlerAsyncOptions } from '@nestjs/throttler';

export class ConfigurationService {
  constructor(private env: { [k: string]: string | undefined }) {}

  public getValue(key: string, defaultValue?: string): string {
    const value = this.env[key];

    if (value === undefined && defaultValue === undefined) {
      throw new Error(`config error - missing env.${key}`);
    }

    if (value === undefined) {
      return defaultValue || '';
    }

    return value;
  }

  public getThrottleConfig(): ThrottlerAsyncOptions {
    return {
      useFactory: () => ({
        ttl: 60 * 20,
        limit: 50,
      }),
    };
  }

  public getHttpModuleConfig(): HttpModuleOptions {
    return {
      timeout: 5000,
      maxRedirects: 5,
    };
  }
}

const configurationService = new ConfigurationService(process.env);

export { configurationService };
