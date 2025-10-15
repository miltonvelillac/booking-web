export type LoginFields = { email: string; password: string };
export type LoginErrors = { email?: string; password?: string };

// Pure validation: returns translated error messages using provided `t`
export function validateLogin(
  { email, password }: LoginFields,
  t: (key: string, params?: Record<string, string | number>) => string
): LoginErrors {
  const errors: LoginErrors = {};
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (!email) {
    errors.email = t('login.error.emailRequired');
  } else if (!emailPattern.test(email)) {
    errors.email = t('login.error.emailInvalid');
  }

  if (!password) {
    errors.password = t('login.error.passwordRequired');
  } else if (password.length < 6) {
    errors.password = t('login.error.passwordMin', { min: 6 });
  }

  return errors;
}

