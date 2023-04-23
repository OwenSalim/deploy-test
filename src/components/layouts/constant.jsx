import { Link } from "react-router-dom";
import { Button } from "antd";

export const MENU_ITEM = [
  {
    label: <Link to="/formcomponent">Form</Link>,
    key: "1",
  },
  {
    label: <Link to="/aboutme">About Me</Link>,
    key: "2",
  },
  {
    label: <Link to="/formexp">Form Mahasiswa</Link>,
    key: "3",
  },
  {
    label: <Link to="/owencrud">Owen</Link>,
    key: "4",
  },
  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),

    key: "5",
  },
];
