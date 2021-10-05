export default function Button({
  children: description = 'Descrição do botãoi', onButtonClick = null
}) {
  function handleButtonClick() {
    if(onButtonClick) {
      onButtonClick();
    }
  }

  return <button className="bg-gray-300 p-2 rounded-md m-2" onClick={handleButtonClick}>{description}</button>
}
