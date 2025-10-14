'use client';

import { Button } from '@/components/ui';
import { InputEmail } from '@/components/ui/InputEmail';
import { InputPassword } from '@/components/ui/InputPassword';
import Label from '@/components/ui/Label';
import LinkElement from '@/components/ui/Link';
import { useI18n } from '@/i18n';

export default function Login() {
  const { t } = useI18n();
  return (
    
    <section className="w-full max-w-md mx-auto">
        <div className='bg-white dark:bg-background/80 rounded-xl shadow-lg p-8'>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{t('login.title')}</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">{t('login.subtitle')}</p>
            </div>
        </div>
        <form className="space-y-6">
            <section>
                <Label label={t('login.emailLabel')} forInput='email' id='emailLabel'/>
                <InputEmail placeholder={t('login.emailPlaceholder')} id="email" name="email" />
            </section>
            <section>
                <div className="flex items-center justify-between mb-2">
                    <Label label={t('login.passwordLabel')} forInput='password' id='passwordLabel'/>
                    <LinkElement id='forgotPassword' label={t('login.forgotPassword')} href='#' />
                </div>
                <InputPassword id="password" name="password" placeholder="••••••••"/>
            </section>
            <div>
                <Button label={t('login.submit')} />
            </div>
        </form>
    </section>
  );
}
