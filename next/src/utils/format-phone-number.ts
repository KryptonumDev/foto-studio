export const formatPhoneNumber = (value: string) => {
  const cleaned = value.replace(/[^\d+]/g, '');
  let formatted = cleaned.replace(/^(\+\d{2})(\d{3})(\d{3})(\d{3}).*/, '$1 $2 $3 $4');
  if (formatted === cleaned) {
    formatted = cleaned.replace(/(.{3})(?=.)/g, '$1 ').trim();
  }
  return formatted;
};
