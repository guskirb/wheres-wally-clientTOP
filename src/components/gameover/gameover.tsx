import "./gameover.css"

export default function GameOver() {
  return (
    <div className="gameover__container">
        <form action="" method="POST" className="gameover__form">
            <input type="text" name="name" id="name" placeholder="Name"/>
            <button>Submit</button>
        </form>
    </div>
  )
}
