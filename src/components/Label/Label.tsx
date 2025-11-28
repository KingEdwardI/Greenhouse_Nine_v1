import React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label: React.FC<LabelProps> = ({
  required,
  children,
  ...props
}) => {
  return (
    <label
      {...props}
      style={{
        display: "inline-flex",
        gap: 6,
        alignItems: "center",
        ...props.style,
      }}
    >
      <span>{children}</span>
      {required ? <span style={{ color: "var(--green-10)" }}>*</span> : null}
    </label>
  );
};

Label.displayName = "Label";
