import { createPortal } from "react-dom";
import classes from "./liveChat.module.css";

export default function LiveChat() {
  return createPortal(
    <div>
      <div className={classes.chatIcon}>
        <i class="fa-brands fa-facebook-messenger"></i>
      </div>
    </div>,
    document.getElementById("root")
  );
}
