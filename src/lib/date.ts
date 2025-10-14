export function formatDate(input: Date | string) {
  const d = typeof input === 'string' ? new Date(input) : input;
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(d);
}

