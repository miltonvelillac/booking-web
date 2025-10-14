'use client';

import { Button } from '@/components/ui';
import { InputEmail } from '@/components/ui/InputEmail';
import { InputPassword } from '@/components/ui/InputPassword';
import Label from '@/components/ui/Label';
import LinkElement from '@/components/ui/Link';

export default function Login() {
  return (
    
    <section className="w-full max-w-md mx-auto">
        <div className='bg-white dark:bg-background/80 rounded-xl shadow-lg p-8'>
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome Back</h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Log in to continue your adventure.</p>
            </div>
        </div>
        <form className="space-y-6">
            <section>
                <Label label='Email or username' forInput='email' id='emailLabel'/>
                <InputEmail placeholder='you@example.com' id="email" name="email" />
            </section>
            <section>
                <div className="flex items-center justify-between mb-2">
                    <Label label='Password' forInput='password' id='passwordLabel'/>
                    <LinkElement id='forgotPassword' label='Forgot password?' href='#' />
                </div>
                <InputPassword id="password" name="password" placeholder="••••••••"/>
            </section>
            <div>
                <Button label='Log in' />
            </div>
        </form>
    </section>
  );
}
