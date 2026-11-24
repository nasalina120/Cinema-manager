export function getErrorMessage (error) {
  return (
    error.response?.data?.message ||
    error.response?.data?.errors?.[0]?.detail ||
    error.message ||
    'Невідома помилка сервера'
  );
}
