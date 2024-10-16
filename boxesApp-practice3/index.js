const Box = props => {
  //  Write your code here.
  const { className, content } = props;
  return <div className={className}>{content}</div>;
};

const element = (
  <div className="container">
  <div className="heading">
      <h1>Boxes</h1>
      <div className="box1">
        <Box content="Small" className="small1" />
        <Box content="Medium" className="medium1" />
        <Box content="Large" className="large1" />
      </div>
</div>
    </div>


  //  Write your code here. 
)

ReactDOM.render(element, document.getElementById("root"));
