import React from "react";
import { Button } from "antd";

export const ButtonComponent = ({ type, onPress }) => {
    //toan tu 3 ngoi 
    //dieu kien ? dung:sai
  return (
    <div>
      <Button
        style={{ fontSize: 32 }}
        onClick={type === "increase" ? () => onPress(1) : () => onPress(-1)}>
        {type === "increase" ? "+" : "-"}
      </Button>
    </div>
  );
};
