// BtnAll.jsx
import { forwardRef } from "react";

const BtnAll = forwardRef(({ children, link }, ref) => {
  return (
    <a href={link} className="btn-all" ref={ref}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M1 13L13 1M13 1V13M13 1H1" stroke="black" strokeWidth="1.5" />
      </svg>

      {children}
    </a>
  );
});

export default BtnAll;
