import Button from "@mui/material/Button";

const MyButton = (props) => {
    const {hoverColor, text, width, height} = props;
  return (
    <Button variant="contained" sx={{ ":hover": {backgroundColor: hoverColor, color: "white"}, textTransform: 'none', width: width, height: height, borderRadius:8}} >
      {text}
    </Button>
  );
};

export default MyButton;