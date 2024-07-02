// eslint-disable-next-line react/prop-types
export const Square = ({ children, updatedBoard, index, isSelected }) => {
  const className = isSelected ? 'square is-selected' : 'square'
  const handleClick = () => {
    updatedBoard(index)
  }

  return (
    <div onClick={handleClick} className={className} key={index}>
      {children}
    </div>
  )
}
