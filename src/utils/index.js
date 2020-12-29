export const getSizeAndUnit = (size) => {
  const value = Number.parseFloat(size);
  const unit = size.replace(new RegExp(value, 'gimu'), '');

  return [value, unit];
};
