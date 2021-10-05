export default function FlashCards({ children: flashcards }) {
  return (
    <div className="border-2 p-2 flex flex-row items-center justify-center flex-wrap">
      {flashcards}
    </div>
  )
}
