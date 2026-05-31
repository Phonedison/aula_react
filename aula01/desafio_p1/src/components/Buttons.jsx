export const Buttons = ({ style, value, disabled = false, onClick }) => {
  return (
    <input
      className={style}
      type="button"
      value={value}
      disabled={disabled}
      onClick={onClick}
    />
  );
};
