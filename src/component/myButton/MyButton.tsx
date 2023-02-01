import "./MyButton.css"

type ButtonProps = {
    children: string;
    type: "submit" | "button";
    theme: "ok" | "cancel";
    click?: () => {}
}

function MyButton({children, type, theme, click}: ButtonProps) {
  return (
    <div>
        <button type={type} onClick={click}
        style={
          theme === "ok" ? {backgroundColor: "blue"} : {backgroundColor: "red"}
        }>
            {children}
        </button>
    </div>
  );
}

export default MyButton;
