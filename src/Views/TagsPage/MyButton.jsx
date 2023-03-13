import Button from "@mui/material/Button";

const MyButton = (props) => {
    const {hoverColor, text} = props;
  return (
    <Button variant="contained" sx={{ ":hover": {backgroundColor: hoverColor, color: "white"}, textTransform: 'none', width: 120, height: 50, borderRadius:8}} >
      {text}
    </Button>
  );
};

export default MyButton;