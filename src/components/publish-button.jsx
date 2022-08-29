const PublishButton = (props) => {
  return (
    <button className={`publish-button`} onClick={props.onClick} style={props.style}>
      {props.children}
    </button>
  );
};

export default PublishButton;
