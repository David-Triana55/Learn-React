/* eslint-disable react/prop-types */
import { Square } from './Square'

export function SquearesFrame ({ board, updatedBoard }) {
  return (
    <section className='game'>
      {
          board.map((_, index) => {
            return (
              <Square key={index} index={index} updatedBoard={updatedBoard}>
                {board[index]}
              </Square>
            )
          })
        }
    </section>
  )
}
