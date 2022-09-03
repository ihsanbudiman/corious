const PublishButton = (props) => {
  return (
    <button className={props.disabled ? `publish-button-disabled` : `publish-button`} onClick={props.disabled ? () => {} : props.onClick} style={props.style}>
      {props.children}
    </button>
  );
};

export default PublishButton;
