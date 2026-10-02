function CountdownUnit({ value, label, valueClassName = "text-surface" }) {
  return (
    <div className="flex flex-col min-w-[150px] max-w-[350px] bg-card items-center px-6 py-4">
      <span
        className={`text-[clamp(3rem,5vw,5rem)] font-bold ${valueClassName}`}
      >
        {value}
      </span>
      <span className="count-label">{label}</span>
    </div>
  );
}

export default CountdownUnit;
