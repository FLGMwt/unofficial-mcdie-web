const NodeContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        backgroundColor: "darkgray",
        padding: 20,
        border: "2px solid gray",
        borderRadius: 4,
      }}
    >
      {children}
    </div>
  );
};
export default NodeContainer;
