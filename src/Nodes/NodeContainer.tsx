const NodeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        padding: 10,
        borderRadius: 3,
        width: 150,
        fontSize: 12,
        color: "#222",
        textAlign: "center",
        borderWidth: 1,
        borderStyle: "solid",
        backgroundColor: "#EEEBE7",
      }}
    >
      {children}
    </div>
  );
};
export default NodeContainer;
