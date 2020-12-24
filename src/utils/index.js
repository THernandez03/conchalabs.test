export const getSizeAndUnit = (size) => {
  const value = Number.parseFloat(size);
  const unit = size.replaceAll(value, '');

  return [value, unit];
};
