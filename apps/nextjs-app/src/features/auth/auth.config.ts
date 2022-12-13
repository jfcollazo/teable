import type { I18nActiveNamespaces } from '@/lib/i18n';

export interface IAuthConfig {
  // Define namespaces in use in both the type and the config.
  i18nNamespaces: I18nActiveNamespaces<'common' | 'navigation' | 'auth'>;
}

export const authConfig: IAuthConfig = {
  i18nNamespaces: ['common', 'navigation', 'auth'],
};