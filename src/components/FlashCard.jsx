export default function FlashCard({
  id='id',
  title='Titulo do card', 
  description='Descrição do card, que pode contar mais palavras que o título.',
  showFlashCardTitle = true,
  onToggleFlashCard = null
}) {
/*const [showTitle, setShowTitle] = useState(showFlashCardTitle);

  useEffect(() => {
    setShowTitle(showFlashCardTitle);
  }, [showFlashCardTitle])
*/
  function handleCardClick() {
    if(onToggleFlashCard){
      onToggleFlashCard(id)
    }
  }

  const fontSizeClassName = showFlashCardTitle ? 'title-xl' : 'text-sm'

  return (
    <div className={`shadow-lg p-4 m-2 w-80 h-48 cursor-pointer
                    flex flex-row items-center justify-center 
                    font-semibold ${fontSizeClassName}`} 
    style={{fontFamily: "'JetBrains Mono', monospace"}}
    onClick={handleCardClick}
    >
      {showFlashCardTitle ? title : description}  
    </div>
  );
}
