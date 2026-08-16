import { Link } from "react-router-dom";
import "./Button.css";

function Button({ children, to, href, variant = "primary", className = "", onClick }) {
  const classes = `button button-${variant} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;

  if (href) return <a href={href} className={classes}>{children}</a>;

  return <button className={classes} onClick={onClick}>{children}</button>;
}

export default Button;