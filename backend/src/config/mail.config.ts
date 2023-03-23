import { MailerOptions, MailerOptionsFactory } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { configurationService } from './config.service';

@Injectable()
export class MailerConfigService implements MailerOptionsFactory {
  createMailerOptions(): MailerOptions | Promise<MailerOptions> {
    return {
      transport: {
        service: configurationService.getValue('MAILER_SERVICE'),
        port: configurationService.getValue('MAILER_PORT'),
        secure: false,
        auth: {
          user: configurationService.getValue('MAILER_USER'),
          pass: configurationService.getValue('MAILER_PASSWORD'),
        },
      },
      defaults: {
        from: 'Coffee Delivery <coffeedelivery.suport@gmail.com>',
      },
      template: {
        dir: join(process.cwd(), 'src', 'services', 'mail', 'templates'),
        adapter: new HandlebarsAdapter(),
        options: {
          strict: true,
        },
      },
    };
  }
}
