import Link from "next/link";
import classes from "./button.module.css";

export default function Button({ link, children, onClick }) {
  if (link)
    return (
      <div>
        <Link href={link}>
          <a className={classes.btn}>{children}</a>
        </Link>
      </div>
    );

  return (
    <button className={classes.btn} onClick={onClick}>
      {children}
    </button>
  );
}
