function clickMe(){
  alert('Thanks, you are so generous!')
}

function DonateButton() {
  return (
    <div>  
       <button onClick={clickMe}>
          Buy me a drink
      </button>

    </div>
     
  );
}

export default DonateButton;