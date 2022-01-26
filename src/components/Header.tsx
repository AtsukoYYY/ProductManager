import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            商品管理システム
          </Typography>
          <Link to="/">一覧</Link>
          &nbsp;
          <Link to="/add">追加</Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
