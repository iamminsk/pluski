import { useTheme } from "../../theme";

export const ListItem: React.FC = (props) => {
  const { colors } = useTheme();
  return (
    <li css={{ display: "flex", alignItems: "center" }}>
      <div
        css={{
          width: 5,
          height: 5,
          backgroundColor: colors.WASHED_WHITE,
          marginRight: 10,
          flexShrink: 0,
        }}
      />
      <span>{props.children}</span>
    </li>
  );
};
